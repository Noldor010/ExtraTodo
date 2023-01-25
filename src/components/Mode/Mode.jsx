import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../../store/redusers/todoSlice';

const Mode = ({coment, idList}) => {
 
  const dispatch = useDispatch()
  const onEdit = (obj) =>{
 
    dispatch(updateTodo({ id: coment.id, checked: obj.variant, idList: idList }))
  }

  return (
    <div 
      className='pt-3 gap-3 d-flex justify-contents-between' 
      style={{flex: "100%"}}
      >
      <Button 
        size="sm" 
        variant={coment.checked === true ? "success": "outline-dark"}
        onClick={()=>onEdit({variant: true})}
        >Active</Button>
      <Button 
        size="sm" 
        variant={coment.checked === false ? "success": "outline-dark"}
        onClick={()=>onEdit({variant: false})}
        >Completed</Button>
    </div>
  )
}

export default Mode