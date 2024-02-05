import React, { useState } from 'react'
import './App.css'

function App() {

  const [counter,setcounter]=useState(15)

  // let counter=5;
  const addValue=()=>{
    // counter++                      //variable is incrementing but the UI isnt getting upadted
                                      //for this we use hooks
    if(counter===20)setcounter(counter=20)
    setcounter(counter+1);
    
  }
  const reduceValue = () => {
    if(counter<=0)setcounter(counter=0)
    setcounter(counter - 1);
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Click here to increment counter</button>
      <br></br>
      <button onClick={reduceValue}>Click here to decrement counter</button>
    </>
  )
}

export default App
