import express from "express"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { matchPath } from "react-router-dom"
import serialize from "serialize-javascript"

import { _App, _Document } from "./lib"
import routes from "./routes"
import { Layout } from "./app/Layout"

declare global {
  interface Window {
    __INITIAL_DATA__: any
  }
}

const app = express()
const port = 3000

app.use(express.static("public"))

app.get("*", async (req, res) => {
  res.set({ "Content-Type": "text/html; charset=UTF-8" })
  console.log({ url: req.url })
  const activeRoute = routes.find((route) => matchPath(route.path, req.url))
  let initialProps: any = {}
  if (activeRoute?.getStaticProps) {
    initialProps = {
      [activeRoute.name]: await activeRoute.getStaticProps(req.url),
    }
  }

  console.log({ serialized: serialize(initialProps) })
  const html = renderToString(
    <_Document initialProps={serialize(initialProps)}>
      <StaticRouter location={req.url}>
        <_App routes={routes} globalInitialProps={initialProps} Layout={Layout} />
      </StaticRouter>
    </_Document>
  )

  console.log({ html })
  res.send(html)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
