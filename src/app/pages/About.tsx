import { useEffect } from "react"
import { Link } from "react-router-dom"

type AboutProps = {
  name?: string
  magicNb?: number
  getStaticProps: () => Promise<any>
}

export const Component = ({ name, magicNb, getStaticProps }: AboutProps) => {
  console.log({ name, magicNb })
  useEffect(() => {
    getStaticProps()
  }, [])
  return (
    <>
      <div>This is About</div>
      <div>
        {" "}
        The code name is <b>{name}</b> and the the magic number is <b>{magicNb}</b>
      </div>
      <Link to="/">Go to Home page</Link>
    </>
  )
}

// @FIXME: no any
export const getStaticProps = async (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "aboutpage", magicNb: 108 }), 1500)
  })
}

// export default Component
