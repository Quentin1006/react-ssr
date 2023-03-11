import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Layout } from "./app/Layout"
import { _RoutesConfig } from "./lib"
import { _App, _RouteConfig } from "./lib/"
import routes from "./routes"

// FIXME: No any
export default (initialProps: Record<string, any>) => {
  const Root = () => {
    return (
      <BrowserRouter>
        <_App routes={routes} globalInitialProps={initialProps} Layout={Layout} />
      </BrowserRouter>
    )
  }
  hydrateRoot(document.getElementById("root")!, <Root />)
}
