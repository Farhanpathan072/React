import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const [counter, setCounter] = useState(15)
  
//  let counter = 15
 
  const addValue = () => {
    // counter = counter + 1
    if (counter < 20) {
      setCounter(counter + 1) 
    }
    else {
      setCounter(counter)
    }
  } 
  
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter(counter)
    }
      
  }
    
    
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>    
      <button onClick={addValue} >ADD Value {counter}</button> 
      <br/>
       <button onClick={removeValue} >Remove Value{counter}</button>
       <p>footer: {counter}</p>
    </>
  )
}

export default App
