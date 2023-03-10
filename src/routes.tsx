import * as HomePage from "./app/pages/Home"
import * as AboutPage from "./app/pages/About"

const routes = [
  {
    path: "/",
    component: HomePage.Component,
    getStaticProps: HomePage.getStaticProps,
  },
  {
    path: "/about",
    component: AboutPage.Component,
    getStaticProps: AboutPage.getStaticProps,
  },
]

export default routes
