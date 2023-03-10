import express from "express"
import * as React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { matchPath } from "react-router-dom"
import serialize from "serialize-javascript"

import App from "./app/App"
import routes from "./routes"

const app = express()
const port = 3000

app.use(express.static("public"))

app.get("*", async (req, res) => {
  res.set({ "Content-Type": "text/html; charset=UTF-8" })
  console.log({ url: req.url })
  const activeRoute = routes.find((route) => matchPath(route.path, req.url))
  let pageProps: any = {}
  if (activeRoute?.getStaticProps) {
    pageProps = await activeRoute.getStaticProps()
  }
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App initialProps={pageProps} />
    </StaticRouter>
  )
  console.log({ html })
  res.send(
    `
<html>
<head>
<title>SSR with React Router</title>
</head>
<body>
    <!-- It has to be on one line or it will trigger hydration error-->
    <div id="root">${html}</div>
    <script>window.__INITIAL_DATA__ = ${serialize(pageProps)}</script>
    <script src="/bundle.js"></script>
</body>
</html>`.replace("\n", "")
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
