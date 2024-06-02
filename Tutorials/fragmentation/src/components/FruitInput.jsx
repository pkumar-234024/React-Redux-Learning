import styles from "./FruitInput.module.css";
const FruitInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Text Here To add"
        className={`${styles.inputControl} form-control`}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
export default FruitInput;
