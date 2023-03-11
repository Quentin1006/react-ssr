import { FC } from "react"

export type _PageProps<T = any> = _RouteConfig & {
  props?: T
  updateAppProps: (newProps: any) => any
}

export type _RouteConfig = {
  name: string
  path: string
  Component: FC<any>
  getStaticProps: (path: string) => Promise<any>
}

export type _RoutesConfig = _RouteConfig[]

export type _AppProps = {
  globalInitialProps?: Record<string, any>
  routes: _RoutesConfig
  Layout?: FC<any>
}
