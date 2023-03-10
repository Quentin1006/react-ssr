import * as HomePage from "./app/pages/Home"
import * as AboutPage from "./app/pages/About"

const routes = [
  {
    name: HomePage.name,
    path: "/",
    Component: HomePage.Component,
    getStaticProps: HomePage.getStaticProps,
  },
  {
    name: AboutPage.name,
    path: "/about",
    Component: AboutPage.Component,
    getStaticProps: AboutPage.getStaticProps,
  },
]

export default routes
