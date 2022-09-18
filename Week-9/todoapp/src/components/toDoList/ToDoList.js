import ToDo from "../toDo/ToDo"
import classes from './ToDoList.module.css'

const ToDoList = () => {
  return (
    <>
      <div className={classes.listContainer}>
        <ToDo />
        <ToDo />
        <ToDo />
      </div>
    </>
  )
}

export default ToDoList