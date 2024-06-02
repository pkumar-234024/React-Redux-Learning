import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items.store";
const TodoItem = (props) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="mt-2 row">
      <div className="col-sm-6">
        <div className="form-control-plaintext fw-bold">{props.todo}</div>
      </div>
      <div className="col-sm-4">
        <div className="form-control-plaintext fw-bold">{props.duedate}</div>
      </div>
      <div className="col-sm-2">
        <button
          className="form-control btn btn-danger"
          onClick={(event) => deleteItem(event, props.id)}
        >
          Delete
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
