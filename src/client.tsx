import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Layout } from "./app/Layout"
import _App from "./lib/_App"
import routes from "./routes"
import Document from "./document"
import App from "./app/App"

const Root = () => {
  return (
    <Document>
      <BrowserRouter>
        <_App routes={routes} globalInitialProps={globalThis.__INITIAL_DATA__} Layout={Layout} />
      </BrowserRouter>
    </Document>
  )
}

const Root2 = () => {
  return <html><body>hello</body></html>
  
}

// hydrateRoot(document.getElementById("root")!, <Root />)
hydrateRoot(document, <App/>)
