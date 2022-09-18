import { AiOutlinePlus } from 'react-icons/ai'
import classes from './InputContainer.module.css'

const InputContainer = (props) => {

  const { data, setData, addToDo } = props

  return (
    <div className={classes.inputDiv}>
      <input 
        type="text"
        placeholder="New Task"
        className={classes.inputEle}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button
        className={classes.btn}
        onClick={() => addToDo()}
        disabled={!data}
      >
        <span className={classes.btnText}><AiOutlinePlus />Add</span>
      </button>
    </div>
  )
}

export default InputContainer