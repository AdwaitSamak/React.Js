import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {    //initial state of the store
    todos:[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),      //it gives unique id
                text:action.payload ///action me payload object hai usme text milega
            } //abhi apanne ek genera;l function likh diya to add task par humne state me add nahi kiya

            state.todos.push(todo);   //push kr diya state me
        },            
        //hamesha function me state aur action ka access milega
        //state mujhe abhi initialSTate me jo values hai unka access degi
        //action has some values which are needed, ex. id is needed to deleete a todo item
        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((obj)=> obj.id!==action.payload)     //id match kiya to naye array me include nahi hoga and hence new array me wo corresponding todo item nahi hoga
        },
    }
})


export const {addTodo,removeTodo} = todoSlice.actions       //alag se functionalities export krni padti hai


//also the store must have the awareness about all the reducers so that it knows from which reducers it takes the values and updates them

export default todoSlice.reducer


//export individual reducers as they help with components
//export reducers so that store maibtains their records 
