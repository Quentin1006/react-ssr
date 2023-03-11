import { Outlet } from "../lib/"

export const Layout = () => {
  return (
    <>
      <h1>My Custom Layout</h1>
      <Outlet />
    </>
  )
}
