import React, {useContext,useState} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} =useContext(UserContext)   //here we are getting the data from the saved state
    if(!user)return <div>Please Login</div>
  return (
    <div>
      Welcome {user.username}            
    </div>
  )
}

export default Profile
