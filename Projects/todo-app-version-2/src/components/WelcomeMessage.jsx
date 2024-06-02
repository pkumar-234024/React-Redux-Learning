import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items.store";
const WelcomMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todolist = contextObj.todolist;
  return (
    <>
      {todolist.length === 0 && (
        <h3 className={styles.welcomeMsg}>
          Enjoy your Day, You don't have any pending todo
        </h3>
      )}
    </>
  );
};
export default WelcomMessage;
