import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addCart, addTodo, deleteCart } from '../store/redusers/todoSlice';
import TodoItem from './TodoItem/TodoItem';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const TodoList = ({list, idList}) => {

  const dispatch = useDispatch()


  return (
    <Card style={{ width: '20rem', boxShadow: '0 0 10px black' }} 
        className = 'p-3 f-wrap'>
        {list.coment.map((item)=>
        <TodoItem
          key = {item.id}
          coment = {item}
          idList = {idList}
          renderAll = {true}
        />
        )}
    <Button
      className='mb-3 mt-3'
      onClick={()=>dispatch(addTodo({idList: idList}))}
    >addTodo</Button>
      <Button
        onClick={()=>dispatch(deleteCart({idList:idList}))}
      >delete cart</Button>
    </Card>
  )
}

export default TodoList