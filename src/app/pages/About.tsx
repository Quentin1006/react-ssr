import { Link } from "react-router-dom"

type AboutProps = {
  name: string
  magicNb: number
}

const About = (props: AboutProps) => {
  console.log("(re)rendering About", { props })
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

export default About
