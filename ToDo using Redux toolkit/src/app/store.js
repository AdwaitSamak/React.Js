import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer: todoReducer                 //yaha bataya humne ki konse reducers hai
})