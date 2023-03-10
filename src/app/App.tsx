import { Route, Routes } from "react-router-dom"

import { AppProvider } from "./app-context"
import { A } from "./Comp"

import routes from "../routes"

type AppProps = {
  initialProps?: Record<string, any>
}

const App = ({ initialProps = {} }: AppProps) => {
  return (
    <AppProvider>
      <A />
      <Routes>
        {routes.map(({ path, getStaticProps, component: Page }) => (
          <Route
            key={path}
            path={path}
            element={<Page getStaticProps={getStaticProps} {...initialProps} />}
          />
        ))}
      </Routes>
    </AppProvider>
  )
}

export default App
