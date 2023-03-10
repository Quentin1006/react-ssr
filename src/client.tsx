import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import _App from "./lib/_App"
import routes from "./routes"

const Root = () => {
  return (
    <BrowserRouter>
      <_App routes={routes} globalInitialProps={globalThis.__INITIAL_DATA__} />
    </BrowserRouter>
  )
}

hydrateRoot(document.getElementById("root")!, <Root />)
