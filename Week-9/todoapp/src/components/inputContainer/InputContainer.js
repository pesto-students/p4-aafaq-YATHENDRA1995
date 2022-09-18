import { AiOutlinePlus } from 'react-icons/ai'
import classes from './InputContainer.module.css'

const InputContainer = () => {
  return (
    <div className={classes.inputDiv}>
      <input 
        type="text"
        placeholder="New Task"
        className={classes.inputEle}
      />
      <button
        className={classes.btn}
      >
        <span className={classes.btnText}><AiOutlinePlus />Add</span>
      </button>
    </div>
  )
}

export default InputContainer