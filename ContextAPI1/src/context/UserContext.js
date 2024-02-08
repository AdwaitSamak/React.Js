import React from 'react'


const UserContext=React.createContext();


export default UserContext;


//Context provides us with a provider, so whatever we put within the UserContext gets the access of the global UserContext
//so we wrap the components around the provideer which is the UserContext
//EXAMPLE
{/* <UserContext>
    <Login />
    <Card>             //all these components gets the access of global context
        <Data/>
    </Card>
</UserContext> */}