import React,{ useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)    //default value of length of passowrd is 8
  const [numberAllowed, setnumberAllowed] = useState(false)   //to see if number is to be included in password or not
  const [charAllowed, setcharAllowed] = useState(false)  //to see if char is to be included in password or not  ---> if checked then true, then include characters in pass
  const [password,setPassword]=useState("")   //state for generating password everytime

  const passwordref=useRef(null)   //default no reference

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed)str=str+"0123456789"
    if(charAllowed)str=str+"!@#$%^&*?"

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char);
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])     //agar inme kuch bhi change hua to aap ye function firse call kijiye aur phirse passsword change kre

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])   //inmese koi bhi change hua to mai phirse call krunga

  const copyPasswordToClipboard = useCallback(()=>{
    passwordref.current?.select()
    // passwordref.current?.setSelectionRange(0,3);    //range from 0,3 is highlighted
    window.navigator.clipboard.writeText(password)
  },[password])     //use callback here depends on password 

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 justify-center bg-gray-700 h-full'>
      <h1 className='text-white text-center pt-3 my-3'>Password Generator</h1>
        <div className='flex shadow overflow-hidden p-5 rounded-md'> 
          <br></br>
          <input type='text' value={password} className='outline-none w-full py-1 px-3 rounded-md' placeholder='Password' readOnly ref={passwordref}></input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 m-1' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 pb-4'>
            <input type='range' min={8} max={30} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
              <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1 pb-4'>
            <input 
            type='checkbox' 
            defaultChecked={numberAllowed} 
            onChange={()=>{setnumberAllowed((prev)=>!prev);
            }}
            />
              <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1 pb-4'>
            <input 
            type='checkbox' 
            defaultChecked={charAllowed} 
            onChange={()=>{setcharAllowed((prev)=>!prev);
            }}
            />
              <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
