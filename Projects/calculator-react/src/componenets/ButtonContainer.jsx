import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ calBtnClick }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonName.map((item) => (
        <button
          key={item}
          className={styles.button}
          onClick={(event) => calBtnClick(event, item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
