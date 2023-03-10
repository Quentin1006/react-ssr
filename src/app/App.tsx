import { Route, Routes } from "react-router-dom"

import { AppProvider } from "./app-context"
import _App from "../lib/_App"

import routes from "../routes"

const App = () => {
  return (
    <AppProvider>
      <_App routes={routes} />
    </AppProvider>
  )
}

export default App
