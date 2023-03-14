import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { loadableReady } from "@loadable/component"

import { Layout } from "./app/Layout"
import { _App, _RoutesConfig, _RouteConfig } from "./lib/"
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
  loadableReady(() => {
    hydrateRoot(document.getElementById("root")!, <Root />)
  })
}
