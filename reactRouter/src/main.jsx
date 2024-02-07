import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contacts/Contacts.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,   //abhi ye Layout render karayega
    children:[
      {
          path:"",          //ye url me dikhega / ke baad kyuki ye uske children hai
          element:<Home/>
      },
      {
          path:"about",
          element:<About/>
      },  
      {
        path:"contactus",
        element:<Contact/>
      },
      // {
      //   path:"user/:userid",   //component ke andar id ka access milta hai isse
      //   element:<User/>
      // },
      {
        // loader:{()=>{
        //   fetch('')     //write complete code
        // }},   //doirect yaha se api call maar skte hai, useefccect se bhi pehle api call ho jayega
        //mouse github pe hover kiya to fetching shuru ho jati hia
        // loader:{githubInfoLoader},       //call a method directly
        path:"github",   
        element:<Github/>
        
      }
    ]
  }
])

  // const router = createBrowserRouter(       //another way
  //   createRoutesFromElements(
  //     <Route path='/' element={<Layout/>}>
  //       <Route path='' element={<Home/>}/>
  //       <Route path='about' element={<About/>}/>
  //       <Route path='contactus' element={<Contact/>}/>
  //     </Route>
  //   )
  // )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
