import { useEffect } from "react"
import { _PageProps } from "./_typings"

const logger = (name: string, path: string) => (message: string) => {
  console.log(name, ":", path, "=>", message)
}

export const _Page = ({
  name,
  path,
  props,
  getStaticProps,
  updateAppProps,
  Component,
}: _PageProps) => {
  const log = logger(name, path)
  useEffect(() => {
    const fetchPageProps = async () => {
      if (!props) {
        log("fetching next props")
        const nextProps = await getStaticProps(path)
        updateAppProps(nextProps)
      } else {
        log("already have props, not doing anything")
      }
    }

    fetchPageProps()
  }, [props, getStaticProps])

  if (!props) {
    return <div>Loading...</div>
  }

  return <Component {...props} />
}
