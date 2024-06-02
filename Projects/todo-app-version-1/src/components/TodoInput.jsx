import { useRef, useState } from "react";
import { MdAddAlert } from "react-icons/md";

function TodoInput({ addtodoItems }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  let todoName = useRef("");
  let dueDate = useRef("");

  // const changeTodoName = (event) => {
  //   refObject.current = refObject.current + 1;
  //   console.log(refObject.current);
  //   setTodoName(event.target.value);
  // };
  // const changeTodoDueDate = (event) => {
  //   setDueDate(event.target.value);
  // };
  // const addtodo = (todoName, dueDate) => {
  //   addtodoItems(todoName, dueDate);
  //   setTodoName("");
  //   setDueDate("");
  // };
  const addtodo = (event) => {
    event.preventDefault();
    console.log(event);

    addtodoItems(todoName.current.value, dueDate.current.value);
    // setTodoName("");
    todoName.current.value = "";
    dueDate.current.value = "";
    // setDueDate("");
  };
  return (
    <div className="container">
      <form onSubmit={addtodo}>
        <div className="mt-4 row">
          <div className="col-sm-6">
            <input
              className="form-control"
              type="text"
              placeholder="Enter to do"
              //value={todoName}
              // onChange={(event) => changeTodoName(event)}
              ref={todoName}
            />
          </div>

          <div className="col-sm-4">
            <input
              className="form-control"
              type="date"
              //value={dueDate}
              // onChange={(event) => changeTodoDueDate(event)}
              ref={dueDate}
            />
          </div>

          <div className="col-sm-2">
            <button
              type="submit"
              className=" form-control btn btn-primary"
              //onClick={(event) => addtodo(todoName.current, dueDate.current)}
            >
              Add <MdAddAlert />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default TodoInput;
