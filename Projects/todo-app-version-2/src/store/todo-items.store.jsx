import { createContext, useReducer, useContext } from "react";

export const TodoItemsContext = createContext({
  todolist: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducers = (currentTodoItems, action) => {
  let newTodoList = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    let newtodoItem = {
      id: currentTodoItems.length + 1,
      name: action.payload.todName,
      date: action.payload.todoDueDate,
    };
    newTodoList = [...currentTodoItems, newtodoItem];
  } else if (action.type === "DELETE_ITEM") {
    newTodoList = currentTodoItems.filter(
      (obj) => obj.id !== action.payload.id
    );
    // setTodoList(newTodList);
  }
  return newTodoList;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todolist, dispatcherTodoList] = useReducer(todoItemReducers, []);
  const deleteItem = (event, id) => {
    const deleteItem = {
      type: "DELETE_ITEM",
      payload: { id },
    };
    dispatcherTodoList(deleteItem);
  };

  const addNewItem = (todName, todoDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        id: todolist.length + 1,
        todName,
        todoDueDate,
      },
    };

    dispatcherTodoList(newItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todolist,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
