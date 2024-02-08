import React,{useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{    //jo bhi children,props aa rhe hai unko aage bhej do
    const [user,setUser]=useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

{/* //jo bhi comps aa rhe hai unko render kr do  */}