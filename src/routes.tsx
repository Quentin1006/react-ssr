import loadable from "@loadable/component"
import fetch from "isomorphic-fetch"
// import { getStaticProps as AboutGetStaticProps } from "./app/pages/About"
// import { getStaticProps as HomeGetStaticProps } from "./app/pages/About"

const routes = [
  {
    name: "Home",
    path: "/",
    Component: loadable(() => import("./app/pages/Home"), { ssr: true }),
    getStaticProps: async (path: string): Promise<any> => {
      return await fetch("http://localhost:8088/home").then((res) => res.json())
    },
  },
  {
    name: "About",
    path: "/about",
    Component: loadable(() => import("./app/pages/About"), { ssr: true }),
    getStaticProps: async (path: string): Promise<any> => {
      return await fetch("http://localhost:8088/about").then((res) => res.json())
    },
  },
]

export default routes
