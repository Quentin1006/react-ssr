import { FC } from "react"

export type PageProps<T = any> = RouteConfig & {
  props?: T
  updateAppProps: (newProps: any) => any
}

type RouteConfig = {
  name: string
  path: string
  Component: FC<any>
  getStaticProps: (path: string) => Promise<any>
}

export type RoutesConfig = RouteConfig[]
