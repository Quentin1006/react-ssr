import { ReactElement } from "react"

export type PageProps<T = any> = {
  props?: T
  updateAppProps: (newProps) => any
  getStaticProps: () => Promise<any>
  Component: ReactElement | any
  name: string
  path: string
}
