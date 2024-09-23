import './App.css'
import { useRef, useState } from 'react'
function App() {

  const ref = useRef(0)
  // ref={
  //   current:0  
  // }
  const [counter, setCounter] = useState(0)

  const handleUseRef = () => {
    ref.current = ref.current + 1
  }
  const handleUseState = () => {
    setCounter(counter + 1)
  }
  return (
    <>
      <h1>Use Ref</h1>
      <button onClick={handleUseRef}>increment with useRef</button>
      <button onClick={handleUseState}>increment with useState</button>
      <h1>{ref.current}</h1>
    </>
  )
}

export default App
