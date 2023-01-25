import {Container} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import TodoList from '../components/TodoList'
 
 

const Active = () => {

  const {items} = useSelector(state => state.todo);
  let simpleSort
  let accumulate =[]
  for(let i=0; i<items.length;i++){
    const itemsSort =  items[i].coment.filter((item)=>item.checked !== true)
    
    simpleSort = {idList: items[i].idList, coment: itemsSort}
    accumulate.push(simpleSort)
  }
  return (
  <Container>
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      {accumulate.map((list)=>
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

export default Active