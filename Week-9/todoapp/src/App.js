import { useState } from 'react'
import uuid from 'react-uuid';

import Header from "./components/header/Header";
import InputContainer from "./components/inputContainer/InputContainer";
import Title from "./components/title/Title";
import ToDoList from "./components/toDoList/ToDoList";

const App = () => {

  const [data, setData] = useState('')
  const [list, setList] = useState([])

  const addToDo = () => {
    if (data.length > 0) {
      const newItem = {
        id: uuid(),
        name: data,
        isDone: false
      }
      setList([ ...list, newItem ])
    }
    setData('')
  }

  const deleteItem = (item) => {
    let updatedList = list.filter((data) => data?.id !== item?.id)
    setList([ ...updatedList ])
  }

  const taskCompleted = (e, item) => {
    let tempList = [...list]
    tempList.forEach((data, i) => {
      if (data?.id === item?.id) {
        data.isDone = e.target.checked
        
      }
    })
    setList([ ...tempList ])
  }

  return (
    <>
      <Header />
      <div className="layout">
        <div className="container">
          <Title />
          <InputContainer data={data}  setData={setData} addToDo={addToDo} /> 
          <ToDoList list={list} del={deleteItem} taskComp={taskCompleted} />
        </div>
      </div>
    </>
  );
}

export default App;
