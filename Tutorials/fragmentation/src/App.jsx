import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";
import FruitsItems from "./components/FruitsItems";
import Header from "./components/Header";
import FruitInput from "./components/FruitInput";
import { useState } from "react";
function App() {
  // const frutiArr = [
  //   "Mango",
  //   "Orange",
  //   "Banana",
  //   "Apple"
  // ];
  // let textStateArr = useState("Fruit is enter by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  let [frutiItems, setFrutiItems] = useState([
    "Mango",
    "Orange",
    "Banana",
    "Apple",
  ]);
  let [textToShow, setTextToShow] = useState("Fruit entered by user");
  let onKeyDown = (event) => {
    if (event.key === "Enter") {
      setTextToShow(event.target.value);
      let newFruitList = [...frutiItems, event.target.value];
      setFrutiItems(newFruitList);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <Header></Header>
        <FruitInput handleKeyDown={onKeyDown} />
        <p className="form-label">{textToShow}</p>
        <FruitsItems fruits={frutiItems} />
      </Container>
    </>
  );
}

export default App;
