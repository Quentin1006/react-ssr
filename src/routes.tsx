import fetch from "isomorphic-fetch"

import HomePage from "./app/pages/Home/Home.page"
import AboutPage from "./app/pages/About"

export const useRoutes = ({ config }: any) => {
  return [
    {
      name: "Home",
      path: "/",
      Component: HomePage,
      getServerSideProps: async (path: string): Promise<any> => {
        const result = await fetch(`${config.apiDomain}/home`)
        const data = await result.json()
        return data
      },
    },
    {
      name: "About",
      path: "/about",
      Component: AboutPage,
      getServerSideProps: async (path: string): Promise<any> => {
        const result = await fetch(`${config.apiDomain}/about`)
        const data = await result.json()
        return data
      },
    },
  ]
}
