import { useQuery } from "@tanstack/react-query"
import fetch from "isomorphic-fetch"
import { useEffect, useState } from "react"

type User = {
  firstname: string
  lastname: string
}

const fetchUser = async () => {
  const result = await fetch("http://localhost:8088/users/1")
  const data = await result.json()
  return { ...data }
}

export default () => {
  // FIXME: manque probablement les initial props
  // pour ne pas refaire l'appel lors de la rehydratation
  const { data, isFetching } = useQuery({
    queryKey: ["users", 1],
    queryFn: () => fetchUser(),
  })

  if (isFetching) {
    return <div>Waiting... No user yet</div>
  }

  console.log("Hero -> ", { data })

  return <div style={{ backgroundColor: "blue", color: "white" }}>Bienvenue {data.firstname} </div>
}
