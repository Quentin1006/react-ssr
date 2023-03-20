import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

import { _App } from "../lib"
import { getRoutes } from "../routes"
import { AppProvider } from "./app-context"
import { Layout } from "./Layout"

export const App = ({ globalInitialProps, config }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
          },
        },
      })
  )

  const routes = getRoutes({ config })
  return (
    <AppProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <_App routes={routes} globalInitialProps={globalInitialProps} Layout={Layout} />
      </QueryClientProvider>
    </AppProvider>
  )
}
