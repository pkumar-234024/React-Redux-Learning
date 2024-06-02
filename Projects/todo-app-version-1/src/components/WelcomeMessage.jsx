import styles from "./WelcomeMessage.module.css";
const WelcomMessage = ({ todolist }) => {
  return (
    <>
      {todolist && (
        <h3 className={styles.welcomeMsg}>
          Enjoy your Day, You don't have any pending todo
        </h3>
      )}
    </>
  );
};
export default WelcomMessage;
