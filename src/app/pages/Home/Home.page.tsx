import { Suspense } from "react"
import { Link } from "react-router-dom"
import Hero from "./Hero"

type HomeProps = {
  name?: string
  magicNb?: number
}

export default (props: HomeProps) => {
  // console.log("(re)rendering Home", { props })
  return (
    <>
      <Suspense fallback={<div>Loading Hero query</div>}>
        <Hero />
      </Suspense>
      <div>This is Home</div>
      <div>
        {" "}
        The code name is <b>{props?.name}</b> and the the magic number is <b>{props?.magicNb}</b>
      </div>
      <Link to="/about">Go to About page</Link>
    </>
  )
}
