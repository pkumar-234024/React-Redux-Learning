import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import Display from "./componenets/Display";
import ButtonContainer from "./componenets/ButtonContainer";

function App() {
  let [displayVal, setDisplayVal] = useState("");

  const calBtnClick = (event, item) => {
    if (item === "C") {
      setDisplayVal("");
      return;
    } else if (item === "=") {
      let newVal = displayVal + item;
      //let evalVal = eval(newVal.toString());
      setDisplayVal(eval(newVal.replace("=", "")));
      return;
    } else {
      console.log(item);
      let newVal = displayVal + item;
      setDisplayVal(newVal);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display disVal={displayVal} />
        <ButtonContainer calBtnClick={calBtnClick} />
      </div>
    </>
  );
}

export default App;
