import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, settodos] = useState([])    //jo bhi todo items aayenge unko store krna padega and ui change krna padega, so state me liya

  const addTodo=(todo)=>{
    settodos((prev)=> [{id:Date.now(),...todo},...prev])       //firstlt todo object ke sare values ko spread kiya, then usme id change ki, then prev prev me append kiya 
    //prev is previous array until that point
  }

  const updatedtodo=(id,todo)=>{
    settodos((prev)=>prev.map((obj)=> obj.id===id ? todo:prev))
  }

  const deletetodo=(id)=>{
    settodos((prev)=> prev.filter((obj)=> obj.id!==id))   //creates array of those objects whose id does not matches with those of the given id to be deleted
  }

  const togglecomplete = (id)=>{
    settodos((prev)=> prev.map((obj)=> obj.id===id? {...obj, completed: !obj.completed} : obj))
  }

  useEffect(()=>{
    const todos= JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0)settodos(todos)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{addTodo, updatedtodo, deletetodo, togglecomplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div className='w-full' key={todo.id} >
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
