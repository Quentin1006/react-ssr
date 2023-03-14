import express from "express"
import serialize from "serialize-javascript"
import { renderToString, renderToPipeableStream } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { matchPath } from "react-router-dom"

import Document from "./document"
import _App from "./lib/_App"
import App from "./app/App"
import routes from "./routes"
import { Layout } from "./app/Layout"

const app = express()
const port = 3000

app.use(express.static("public"))

app.get("*", async (req, res) => {
  console.log({ url: req.url })
  const activeRoute = routes.find((route) => matchPath(route.path, req.url))
  let initialProps: any = {}
  if (activeRoute?.getStaticProps) {
    initialProps = {
      [activeRoute.name]: await activeRoute.getStaticProps(req.url),
    }
  }
  const { pipe, abort } = renderToPipeableStream(
    // <Document>
    //   <StaticRouter  location={req.url}>
    //     <_App routes={routes} globalInitialProps={initialProps} Layout={Layout} />
    //   </StaticRouter>
    // </Document>,
    <App/>,
    {
      bootstrapScripts: ["/bundle.js"],
      // bootstrapScriptContent: `window.__INITIAL_DATA__ = ${serialize(initialProps)}`,
      onAllReady() {
        res.setHeader("content-type", "text/html")
        console.log("shell ready")
        pipe(res)
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
