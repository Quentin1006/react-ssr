import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Layout } from "./app/Layout"
import _App from "./lib/_App"
import routes from "./routes"

const Root = () => {
  return (
    <BrowserRouter>
      <_App routes={routes} globalInitialProps={globalThis.__INITIAL_DATA__} Layout={Layout} />
    </BrowserRouter>
  )
}

hydrateRoot(document.getElementById("root")!, <Root />)
