import ToDo from "../toDo/ToDo"
import classes from './ToDoList.module.css'

const ToDoList = (props) => {

  const { list, del, taskComp } = props

  return (
    <>
      <div className={classes.listContainer}>
        {
          list.map((item) => {
            return <ToDo key={item?.id} item={item} del={del} taskComp={taskComp} />
          })
        }
      </div>
    </>
  )
}

export default ToDoList