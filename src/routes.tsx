import { lazy } from "react"

const routes = [
  {
    name: "Home",
    path: "/",
    Component: lazy(() => import("./app/pages/Home")),
    getStaticProps: async (path: string): Promise<any> => {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ name: "homepage", magicNb: 6 }), 1000)
      })
    },
  },
  {
    name: "About",
    path: "/about",
    Component: lazy(() => import("./app/pages/About")),
    getStaticProps: async (path: string): Promise<any> => {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ name: "aboutpage", magicNb: 108 }), 1500)
      })
    },
  },
]

export default routes
