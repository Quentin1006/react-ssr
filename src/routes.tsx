import { lazy } from "react"
import fetch from "isomorphic-fetch"

const routes = [
  {
    name: "Home",
    path: "/",
    Component: lazy(() => import("./app/pages/Home/page")),
    getStaticProps: async (path: string): Promise<any> => {
      const result = await fetch("http://localhost:8088/home")
      const data = await result.json()
      return data
    },
  },
  {
    name: "About",
    path: "/about",
    Component: lazy(() => import("./app/pages/About")),
    getStaticProps: async (path: string): Promise<any> => {
      const result = await fetch("http://localhost:8088/about")
      const data = await result.json()
      return data
    },
  },
]

export default routes
