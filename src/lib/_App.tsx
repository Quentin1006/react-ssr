import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import { _Page } from "./_Page"
import type { RoutesConfig } from "./typings"

type _AppProps = {
  globalInitialProps?: Record<string, any>
  routes: RoutesConfig
}

const _App = ({ routes, globalInitialProps }: _AppProps) => {
  const [globalAppProps, setGlobalAppProps] = useState(globalInitialProps)
  const updateAppProps = (routeName: string) => (newProps) => {
    setGlobalAppProps({
      ...(globalAppProps || {}),
      [routeName]: newProps,
    })
  }
  return (
    <Routes>
      {routes.map(({ name, path, getStaticProps, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <_Page
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
  )
}

export default _App
