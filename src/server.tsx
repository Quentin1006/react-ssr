import express from "express"
import serialize from "serialize-javascript"
import { renderToPipeableStream } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { matchPath } from "react-router-dom"

import Document from "./document"
import { App } from "./app/App"
import { getRoutes } from "./routes"
import { Layout } from "./app/Layout"

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
  const config = {
    apiDomain: "http://localhost:8088",
  }
  const activeRoute = getRoutes({ config }).find((route) => matchPath(route.path, req.url))
  let initialProps: any = {}
  if (activeRoute?.getServerSideProps) {
    initialProps = {
      [activeRoute.name]: await activeRoute.getServerSideProps(req.url),
    }
  }

  console.log({ initialProps, config })
  const stream = renderToPipeableStream(
    <Document>
      <StaticRouter location={req.url}>
        <App globalInitialProps={initialProps} config={config} />
      </StaticRouter>
    </Document>,
    {
      bootstrapScripts: ["/bundle.js"],
      bootstrapScriptContent: `
        window.__INITIAL_DATA__ = ${serialize(initialProps)};
        window.__CONFIG__ = ${serialize(config)};
        window.__REACT_QUERY_STATE__  = ${serialize(config)};
      `,
      onShellReady() {
        res.setHeader("Content-Type", "text/html")
        res.statusCode = 200
        console.log("shell ready")
        stream.pipe(res)
      },
      onError(x) {
        console.error(x)
      },
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
