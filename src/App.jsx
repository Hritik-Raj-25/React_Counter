import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter<20){
      counter = counter + 1;
      console.log("Add Button clicked and added value to : " + counter)
      setCounter(counter)
    }
    else{
      console.log("The Counter has reached its maximun value")
    }

  }

  const subValue = () => {
    if (counter>0){
      counter = counter - 1;
      console.log("Subtract Button clicked and subtracted value to : " + counter)
      setCounter(counter)
    }
    else{
      console.log("The counter has reached its minimum value")
    }

  }

  return (
    <>
      <h1>Counter : {counter} </h1>
      <button onClick={addValue}>Increase Count : {counter}</button>
      <br />
      <button onClick={subValue}>Decrease Count : {counter}</button>
    </>
  )
}

export default App
