import fetch from "isomorphic-fetch"

const wrapPromise = <T>(promise: Promise<T>) => {
  let status = "pending"
  let response

  const suspender = promise.then(
    (res) => {
      status = "success"
      response = res
    },
    (err) => {
      status = "error"
      response = err
    }
  )
  const read = () => {
    switch (status) {
      case "pending":
        console.log("status is pending")
        throw suspender
      case "error":
        console.log("status is error")
        throw response
      default:
        console.log("status is response")
        return response
    }
  }

  return { read }
}

export default <T = any>(url: string) => {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res.data)

  return wrapPromise<T>(promise)
}
