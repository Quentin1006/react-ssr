import { lazy } from "react"
import fetch from "isomorphic-fetch"

// @FIXME: Will be hard to have access to config
// if not in hook or react component
export const getRoutes = ({ config }: any) => {
  return [
    {
      name: "Home",
      path: "/",
      Component: lazy(() => import("./app/pages/Home/page")),
      getServerSideProps: async (path: string): Promise<any> => {
        const result = await fetch(`${config.apiDomain}/home`)
        const data = await result.json()
        return data
      },
    },
    {
      name: "About",
      path: "/about",
      Component: lazy(() => import("./app/pages/About")),
      getServerSideProps: async (path: string): Promise<any> => {
        const result = await fetch(`${config.apiDomain}/about`)
        const data = await result.json()
        return data
      },
    },
  ]
}

export default {}
