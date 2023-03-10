import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./app/App"

const Root = () => {
  return (
    <BrowserRouter>
      <App globalInitialProps={globalThis.__INITIAL_DATA__} />
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
