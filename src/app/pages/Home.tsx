import { Link } from "react-router-dom"

type HomeProps = {
  name?: string
  magicNb?: number
}

const Home = (props: HomeProps) => {
  console.log("(re)rendering Home", { props })
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

export default Home
