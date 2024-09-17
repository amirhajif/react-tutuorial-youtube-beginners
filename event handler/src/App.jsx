import './App.css'
import Button from './components/Button'

function App() {

  const handleClick = () => {
    alert("clicked on item")
  }

  // function handleClick() {
  //   alert("clicked")
  // }

  // const handleClick = (e) => {
  //   const message = e.target.textContent
  //   alert(message)
  // }

  return (
    // <button onClick={handleClick}>Click On me</button>
    <Button text="click" handleClick={handleClick} />
  )
}

export default App
