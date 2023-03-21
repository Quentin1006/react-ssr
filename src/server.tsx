import express from "express"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { matchPath } from "react-router-dom"
import serialize from "serialize-javascript"

import Document from "./Document"
import { App } from "./app/App"
import { useRoutes } from "./routes"
import { Layout } from "./app/Layout"

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
  res.set({ "Content-Type": "text/html; charset=UTF-8" })
  console.log({ url: req.url })

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

  console.log({ serialized: serialize(initialProps) })
  const html = renderToString(
    <Document initialProps={serialize(initialProps)} config={config}>
      <StaticRouter location={req.url}>
        <App globalInitialProps={initialProps} config={config} />
      </StaticRouter>
    </Document>
  )

  console.log({ html })
  res.send(html)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
