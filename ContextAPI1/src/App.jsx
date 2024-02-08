import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Context API 1</h1>
      <Login/>    
      {/* //components data kaise access karenge wo humne comp ke andar hi handle kr liya */}
      <Profile/>
    </UserContextProvider>
  )
}

export default App
