import React, { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const addCount = () => setCount(count => count + 1)
  const subtractCount = () => setCount(count => count - 1)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
    </div>
  )
}


export default App;
