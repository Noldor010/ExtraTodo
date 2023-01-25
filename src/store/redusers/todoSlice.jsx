import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState:{
    items:[ {idList: 1, coment: [
      {id:1, name: 'simple', checked: true},
      {id:2, name: 'next', checked: false}
    ]}
  ]
  },
  reducers:{ 
      addTodo(state, action){
        const item = {
          id: Date.now(),
          name: "Simple",
          checked: true,
        }
        const findList = state.items.find((item)=>item.idList === action.payload.idList)

        findList.coment.push(item)
        
      },
      updateTodo(state, action){
        const findList = state.items.find((item)=>item.idList === action.payload.idList)
        const findItem = findList.coment.find((item)=>item.id === action.payload.id)
        if(action.payload.name){
          findItem.name = action.payload.name 
        } 
        if(!action.payload.checked || action.payload.checked){
          console.log(action.payload.checked)
          findItem.checked = action.payload.checked 
        }
      },
      deleteTodo(state, action){
        const findList = state.items.find((item)=>item.idList === action.payload.idList)
        findList.coment = findList.coment.filter((item)=>item.id !== action.payload.id)
      },
      addCart(state, action){
        const item = {idList: Date.now(), coment: [{id:Date.now(), name: action.payload.name, checked: true,}]}
        state.items.push(item)
      },
      deleteCart(state, action){
        state.items = state.items.filter((item)=>item.idList !== action.payload.idList)
      }
  }
})

export const {addTodo, deleteTodo, updateTodo, addCart, deleteCart} = todoSlice.actions
export const todoReducer = todoSlice.reducer  