import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import { _Page } from "./_Page"

import _DefaultLayout from "./_DefaultLayout"
import type { _AppProps } from "./_typings"

const _App = ({ routes, globalInitialProps, Layout = _DefaultLayout }: _AppProps) => {
  const [globalAppProps, setGlobalAppProps] = useState(globalInitialProps)
  const updateAppProps = (routeName: string) => (newProps) => {
    setGlobalAppProps({
      ...(globalAppProps || {}),
      [routeName]: newProps,
    })
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
      </Route>
    </Routes>
  )
}

export default _App
