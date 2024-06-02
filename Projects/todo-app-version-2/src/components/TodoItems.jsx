import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items.store";
import TodoItem from "./TodoItem";
function TodoItems() {
  const { todolist, deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container ">
      {todolist.map((item) => (
        <TodoItem
          key={item.id}
          todo={item.name}
          duedate={item.date}
          id={item.id}
          deleteTodoItem={deleteItem}
        />
      ))}
    </div>
    // <div className="mt-2 row">
    //   <div className="col-sm-6">
    //     <div className="form-control-plaintext fw-bold">{props.todo}</div>
    //   </div>
    //   <div className="col-sm-4">
    //     <div className="form-control-plaintext fw-bold">{props.duedate}</div>
    //   </div>
    //   <div className="col-sm-2">
    //     <button
    //       className="form-control btn btn-danger"
    //       onClick={(event) => props.deleteTodoItem(event, props.id)}
    //     >
    //       Delete
    //       <MdDelete />
    //     </button>
    //   </div>
    // </div>
  );
}
export default TodoItems;
