import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"Adwait",
    email:"adwait@google.com"
  }
  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl p-5 mb-4'>Hello There</h1>
      {/* //no need to write separate css using tailwind p means padding of 4 px*/}
      <Card name="Adwait" newobj={myobj}/>   
      	{/* //we can pass values to a component */}
    </>
  )
}

export default App
