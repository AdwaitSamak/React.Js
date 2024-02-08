import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos:[           //component koi bhi ho, mai access karunga context ko aur todo se data lunga
        {
            id:1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},          //nayi to do banane ke liye todo message lagega
    updatedtodo: (id,todo)=>{},     //edit krne ke liye id and message lagega
    deletetodo: (id)=>{},
    togglecomplete: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider