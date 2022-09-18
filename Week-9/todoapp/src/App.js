import Header from "./components/header/Header";
import InputContainer from "./components/inputContainer/InputContainer";
import Title from "./components/title/Title";
import ToDoList from "./components/toDoList/ToDoList";

const App = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="container">
          <Title />
          <InputContainer /> 
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default App;
