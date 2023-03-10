import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./app/App"

const Root = () => {
  const initialProps = globalThis.__INITIAL_DATA__ ?? {}
  delete globalThis.__INITIAL_DATA__
  return (
    <BrowserRouter>
      <App initialProps={initialProps} />
    </BrowserRouter>
  )
}

hydrateRoot(document.getElementById("root")!, <Root />)

// const root = createRoot(document.querySelector("#root")!)

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )
