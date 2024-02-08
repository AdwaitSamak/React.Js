import React,{useContext,useState} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const {setUser} = useContext(UserContext)   //usercontext se hum user aur setuser states pass kr rhe the so that we will be able to add the user from login, so hum abhi wo state use kr rhe the by accessing the UserContext

    const [username,setUsername]=useState('');   //username and password ko manage krne k liye
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})   //so abhi apan ne username password user me rkh diya
        //so hmne data send kr diya
    }

   

  return (
    <div>
      <h2>Login</h2> 
      <input type='text' placeholder='Username' value={username} onChange={(e)=> setUsername(e.target.value)}/>    
      {/* chnage in input field, we trigger an event, which changes the state to the newer username */}
      <input type='text' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
