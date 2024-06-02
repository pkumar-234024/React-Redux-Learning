import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import TodoInput from "./components/TodoInput";
import "./App.css";
import WelcomMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items.store";

function App() {
  //let [todolist, setTodoList] = useState([]);

  return (
    <TodoItemsContextProvider>
      <center className="m-5 todo-container">
        {/* app name */}
        <div className="mt-2 todo-app-name">
          <AppName />
        </div>
        {/*To do APp input Tag */}
        <div className="todo-input-app">
          <TodoInput />
        </div>
        <WelcomMessage />
        {/*Display TOdo List */}
        {/* <div className="container "> */}
        <TodoItems />
        {/* </div> */}
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
