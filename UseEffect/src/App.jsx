import { useEffect, useState } from "react"

function App() {

  const [counter, setCounter] = useState(0)
  const [newCounter, setNewCounter] = useState(0)

  // useEffect(callBack,dependency)
  // useEffect without dependency
  // useEffect(() => {
  //   console.log("hello")
  // })

  // useEffect with empty Dependency
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //     })
  // }, [])

  // dependency with element
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }, [counter, newCounter])


  return (
    <>
      <h1>UseEffect</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>

      <h1>{newCounter}</h1>
      <button onClick={() => setNewCounter(newCounter + 1)}>increment</button>
    </>
  )
}

export default App
