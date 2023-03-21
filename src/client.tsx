import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { App } from "./app/App"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App globalInitialProps={globalThis.__INITIAL_DATA__} config={globalThis.__CONFIG__} />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
hydrateRoot(document.getElementById("root")!, <Root />)
