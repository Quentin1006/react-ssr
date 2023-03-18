import { useEffect, useState } from "react"
import { _fetch } from "../../../lib"

type User = {
  firstname: string
  lastname: string
}

const { read } = _fetch<User>("http://localhost:8088/users/1")

export default () => {
  const user = read()

  if (!user) {
    return <div>Waiting... No user yet</div>
  }

  return <div style={{ backgroundColor: "blue", color: "white" }}>Bienvenue {user.firstname} </div>
}
