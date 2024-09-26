import { useReducer } from "react"
function App() {
  const initialState = {
    counter: 0
  }

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          counter: state.counter + 1
        }
      case "decrement":
        return {
          counter: state.counter - 1
        }
      case "reset":
        return {
          counter: 0
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

    </>
  )
}

export default App
