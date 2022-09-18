import classes from './ToDo.module.css'
import { RiDeleteBin6Line } from 'react-icons/ri'

const ToDo = () => {
  return (
    <div className={classes.listItem}>
      <div className={classes.content}>
        <input
          type="checkbox"
          className={classes.checkbox}
        />
        <p>First Item</p>
      </div>
      <span className={classes.delIcon}><RiDeleteBin6Line color="#B4161B" /></span>
    </div>
  )
}

export default ToDo