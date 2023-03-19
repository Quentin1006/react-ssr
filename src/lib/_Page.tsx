import { Suspense, useEffect } from "react"
import { _PageProps } from "./_typings"

const logger = (name: string, path: string) => (message: string) => {
  console.log(name, ":", path, "=>", message)
}

export const _Page = ({
  name,
  path,
  props,
  getServerSideProps,
  updateAppProps,
  Component,
}: _PageProps) => {
  const log = logger(name, path)
  useEffect(() => {
    const fetchPageProps = async () => {
      if (!props) {
        log("fetching next props")
        const nextProps = await getServerSideProps(path)
        updateAppProps(nextProps)
      } else {
        log("already have props, not doing anything")
      }
    }

    fetchPageProps()
  }, [props, getServerSideProps])

  if (!props) {
    return <div>Waiting for props to be fetched...</div>
  }

  return (
    <Suspense fallback={<div>Waiting for dynamic import within suspense to resolve...</div>}>
      <Component {...props} />
    </Suspense>
  )
}
