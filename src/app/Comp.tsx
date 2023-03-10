import { useEffect } from "react"

import { useAppContext } from "./app-context"

export const A = ({}: any) => {
  const { name, number, setNumber } = useAppContext()
  useEffect(() => {
    setNumber(4)
  }, [number, setNumber])
  return (
    <div className="A">
      <div className="A-inner">Hello my name is {name}</div>
      <div className="A-inner">My num is {number}</div>
      <hr />
    </div>
  )
}
