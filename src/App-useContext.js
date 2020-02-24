import React, { useContext, useState } from 'react'

const counterContext = React.createContext()

function CounterProvider({ children }) {
  const [count, setCount] = useState(0)
  const plusOne = () => setCount(count + 1)
  const owner = 'pipusana'

  return (
    <counterContext.Provider value={{ count, plusOne, owner }}>
      {children}
    </counterContext.Provider>
  )
}

function CounterComponent() {
  const { count, plusOne } = useContext(counterContext)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => plusOne()}>+ 1</button>
    </>
  )
}

function OwnerComponent() {
  const { owner } = useContext(counterContext)

  return (
    <>
      <h1>{owner}</h1>
    </>
  )
}

function App() {
  return (
    <CounterProvider>
      <CounterComponent />
      <OwnerComponent />
    </CounterProvider>
  )
}

export default App;
