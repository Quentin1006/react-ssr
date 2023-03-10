import { Link } from "react-router-dom"

type HomeProps = {
  name?: string
  magicNb?: number
  getStaticProps: () => Promise<any>
}

export const Component = ({ name, magicNb, getStaticProps }: HomeProps) => {
  console.log({ name, magicNb })
  return (
    <>
      <div>This is Home</div>
      <div>
        {" "}
        The code name is <b>{name}</b> and the the magic number is <b>{magicNb}</b>
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
