import { Route, Routes } from "react-router-dom"

import { AppProvider } from "./app-context"
import { A } from "./Comp"

import routes from "../routes"
import { useState } from "react"
import { Page } from "./pages/Page"

type AppProps = {
  globalInitialProps?: Record<string, any>
}

const App = ({ globalInitialProps }: AppProps) => {
  const [globalAppProps, setGlobalAppProps] = useState(globalInitialProps)
  const updateAppProps = (routeName: string) => (newProps) => {
    setGlobalAppProps({
      ...(globalAppProps || {}),
      [routeName]: newProps,
    })
  }
  return (
    <AppProvider>
      <A />
      <Routes>
        {routes.map(({ name, path, getStaticProps, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Page
                getStaticProps={getStaticProps}
                props={globalAppProps?.[name]}
                updateAppProps={updateAppProps(name)}
                Component={Component}
                name={name}
                path={path}
              />
            }
          />
        ))}
      </Routes>
    </AppProvider>
  )
}

export default App
