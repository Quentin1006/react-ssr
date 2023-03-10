import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PageProps } from "../../typings"

type HomeProps = {
  name?: string
  magicNb?: number
}

export const Component = (props: HomeProps) => {
  return (
    <>
      <div>This is Home</div>
      <div>
        {" "}
        The code name is <b>{props?.name}</b> and the the magic number is <b>{props?.magicNb}</b>
      </div>
      <Link to="/about">Go to About page</Link>
    </>
  )
}

export const getStaticProps = async (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "homepage", magicNb: 6 }), 1000)
  })
}

export const name = "Home"
