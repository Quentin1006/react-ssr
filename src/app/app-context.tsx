import { createContext, useContext, useState } from "react"

const AppContext = createContext<any>({})

export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children, config }) => {
  const [number, setNumber] = useState<number>(2)
  const [name, setName] = useState<string>("Quentin")

  return (
    <AppContext.Provider value={{ config, name, number, setName, setNumber }}>
      {children}
    </AppContext.Provider>
  )
}
