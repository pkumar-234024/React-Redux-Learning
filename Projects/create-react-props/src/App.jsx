import FruitItems from "./components/FruitItems";
import PropsAppName from "./components/PropsAppName";

function App() {
  let fruits = ["mango", "banana", "guava", "orange", "apple"];
  //let fruits = [];
  return (
    <>
      <PropsAppName />
      <FruitItems fruits={fruits} />
    </>
  );
}

export default App;
