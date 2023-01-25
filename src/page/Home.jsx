import React, { useState } from 'react'
import {Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import AddCart from '../components/AddCart/AddCart'
import TodoList from '../components/TodoList'
 
 

const Home = () => {

  const {items} = useSelector(state => state.todo);


  return (
  <Container>
    <AddCart/>
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      {items.map((list)=>
        <TodoList
          key = {list.idList}
          list = {list}
          idList = {list.idList} 
        />
      )}
    </div>
  </Container>
  )
}

export default Home