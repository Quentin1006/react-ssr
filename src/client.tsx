import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import Document from "./document"
import { App } from "./app/App"

const Root = () => {
  return (
    <Document>
      <BrowserRouter>
        <App globalInitialProps={globalThis.__INITIAL_DATA__} config={globalThis.__CONFIG__} />
      </BrowserRouter>
    </Document>
  )
}

hydrateRoot(document, <Root />)
