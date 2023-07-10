import { useState } from 'react'
import Soon from './components/Soon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Soon />
    </>
  )
}

export default App
