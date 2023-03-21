import express from "express"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { matchPath } from "react-router-dom"
import serialize from "serialize-javascript"
import { dehydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ssrPrepass from "react-ssr-prepass"

import { App } from "./app/App"
import { useRoutes } from "./routes"

declare global {
  interface Window {
    __INITIAL_DATA__: any
  }
}

const app = express()
const port = 3000

app.use((req, res, next) => {
  if (req.url.endsWith(".js")) {
    // Artificially delay serving JS
    // to demonstrate streaming HTML.
    setTimeout(next, 1000)
  } else {
    next()
  }
})

app.use(express.static("public"))

app.get("*", async (req, res) => {
  console.log({ url: req.url })
  const queryClient = new QueryClient()

  const config = {
    apiDomain: "http://localhost:8088",
  }

  const routes = useRoutes({ config })
  const activeRoute = routes.find((route) => matchPath(route.path, req.url))
  let initialProps: any = {}
  if (activeRoute?.getServerSideProps) {
    initialProps = {
      [activeRoute.name]: await activeRoute.getServerSideProps(req.url),
    }
  }

  const ReactHtml = () => (
    <StaticRouter location={req.url}>
      <App globalInitialProps={initialProps} config={config} />
    </StaticRouter>
  )

  const t = Date.now()
  console.log("before ssrPrepass", t)
  while (true) {
    await ssrPrepass(<ReactHtml />)
    console.log("isFetching", queryClient.isFetching())
    if (!queryClient.isFetching()) {
      // the render didn't cause th
      break
    }

    // wait until the query cache has settled it's promises
    await new Promise<void>((resolve) => {
      const unsub = queryClient.getQueryCache().subscribe((event) => {
        if (event?.query.getObserversCount() === 0) {
          resolve()
          unsub()
        }
      })
    })
  }
  console.log("after ssrPrepass", Date.now() - t)

  console.log("querCache", queryClient.getQueryCache())
  const dehydratedState = dehydrate(queryClient)

  const html = renderToString(
    // <Document initialProps={serialize(initialProps)} config={config} queryState={dehydratedState}>
    <QueryClientProvider client={queryClient}>
      <ReactHtml />
    </QueryClientProvider>
    // </Document>
  )

  console.log({ dehydratedState })

  res.set({ "Content-Type": "text/html; charset=UTF-8" })
  res.send(
    `<html>
      <head>
        <title>SSR with React Router</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
            window.__INITIAL_DATA__ = ${serialize(initialProps)}; 
            window.__CONFIG__ = ${serialize(config)};
            window.__REACT_QUERY_STATE__ = ${serialize(dehydratedState)};
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>`
  )

  // queryClient.clear()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
