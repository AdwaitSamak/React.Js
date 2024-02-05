import React from 'react'

function Card(props) {   {/** default values,,, can also be named as props in parameter  ----> Card({name,btntext="clickme"})   instead of props, we can also destructure the props object accordi g to the values we are passing */}
  return (
    <div class="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">{props.name}</h1>  {/** here we have used the props =, in the app.jsx we had passed name as adwait, so whenever we display the card, we can show the name we want using the props */}
          <p class="mt-2 text-sm text-gray-300">
            {props.newobj.email}      {/*//used PROPS*/}
          </p>
          <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" className='color-black mt-5 rounded-xl'>
            {props.btntext}
          </button>
        </div>
      </div>
  )
}

export default Card
