import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { PageProps } from "../../typings"

type AboutProps = {
  name: string
  magicNb: number
}

export const Component = (props: AboutProps) => {
  console.log("rerendering About", { props })
  return (
    <>
      <div>This is About</div>
      <div>
        {" "}
        The code name is <b>{props.name}</b> and the the magic number is <b>{props.magicNb}</b>
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

export const name = "About"

// export default Component
