import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setCounter] = useState(5)

  // let counter = 5

  const addValue = ()=>{
    if(counter < 20){ 
      
      setCounter(counter+1)
      console.log("clicked", counter)
    };
    
    // counter = counter + 1
    
    
  }

  const rmvValue=()=>{
    if(counter>0) setCounter(counter-1);
    
    // console.log("clicked",counter)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter} </h2>

      <button 
      onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={rmvValue}>remove value</button>

      <p>footer:{counter}</p>
      
    </>
  )
}

export default App
