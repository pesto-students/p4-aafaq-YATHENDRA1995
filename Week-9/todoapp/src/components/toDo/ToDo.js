import classes from './ToDo.module.css'
import { RiDeleteBin6Line } from 'react-icons/ri'

const ToDo = (props) => {

  const { item, del, taskComp } = props

  return (
    <div className={classes.listItem}>
      <div className={classes.content}>
        <input
          type="checkbox"
          className={classes.checkbox}
          checked={item?.isDone}
          onChange={(e) => taskComp(e, item)}
        />
        <p 
          className={item?.isDone ? classes.toDoName: ''}
        >{item?.name}</p>
      </div>
      <span 
        className={classes.delIcon}
        onClick={() => del(item)}
      ><RiDeleteBin6Line color="#B4161B" /></span>
    </div>
  )
}

export default ToDo