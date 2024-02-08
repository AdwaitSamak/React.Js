import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './comps/ThemeBtn'
import Card from './comps/Card'

function App() {
  const [thememode, setThememode] = useState("light")

  const lightTheme=()=>{
    setThememode("light");
  }

  const darkTheme=()=>{
    setThememode("dark");
  }

  // how we actually chaneg theme
  useEffect(()=>{
    const el= document.querySelector('html').classList
    el.remove("light","dark");            //remove all light and dark from the classlist
    el.add(thememode)            //add according to the thememode 
  },[thememode])   //thememode me koi bhi change ho to phirse run hona chahiye

  return (
    <ThemeProvider value={{thememode, lightTheme, darkTheme}}>   
    {/* //kis kis cheej ka access hai */}
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
    
  )
}

export default App
