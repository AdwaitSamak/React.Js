import React, { useEffect, useState } from 'react'
// import {useLoaderData} from 'react-router-dom'
function Github() { 
    const [data,setData] = useState([]);
    useEffect(()=>{      //jab bhi component load ho apne ko api fetch krna hai
        fetch('https://api.github.com/users/AdwaitSamak').then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setData(resp);
        })
    },[])
   
    //Other way ||
    // const data=useLoaderData()

  return (
    <div className='text-center m-4 bg-grey-600 p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300}/>
    </div>
  )
}


export default Github


// export const githubInfoLoader=async ()=>{
//     const resp=await fetch('https://api.github.com/users/AdwaitSamak')
//     return resp.json()
// }