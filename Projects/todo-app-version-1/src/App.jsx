import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import TodoInput from "./components/TodoInput";
import "./App.css";
import { useState } from "react";
import WelcomMessage from "./components/WelcomeMessage";
function App() {
  let [todolist, setTodoList] = useState([]);

  const deleteTodoItem = (event, id) => {
    let newTodList = todolist.filter((obj) => obj.id != id);
    setTodoList(newTodList);
  };

  const addtodoItems = (todName, todoDueDate) => {
    let newtodoItem = {
      id: todolist.length + 1,
      name: todName,
      date: todoDueDate,
    };
    let newTodoList = [...todolist, newtodoItem];
    setTodoList(newTodoList);
  };
  return (
    <center className="m-5 todo-container">
      {/* app name */}
      <div className="mt-2 todo-app-name">
        <AppName />
      </div>
      {/*To do APp input Tag */}
      <div className="todo-input-app">
        <TodoInput addtodoItems={addtodoItems} />
      </div>
      <WelcomMessage todolist={todolist.length == 0} />
      {/*Display TOdo List */}
      <div className="container ">
        {todolist.map((item) => (
          <TodoItems
            key={item.id}
            todo={item.name}
            duedate={item.date}
            id={item.id}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
    </center>
  );
}

export default App;
