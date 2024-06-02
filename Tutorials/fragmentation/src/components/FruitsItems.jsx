import { useState } from "react";
import Item from "./Item";

const FruitsItems = (props) => {
  const fruitItems = props.fruits;

  let [activeItems, setActiveItems] = useState([]);
  const onclickBuyBtn = (event, item) => {
    if (!activeItems.includes(item)) {
      let newActiveItem = [...activeItems, item];
      setActiveItems(newActiveItem);
    }
  };

  const onclickRmBtn = (event, item) => {
    if (!activeItems.includes(item)) {
      // let newActiveItem = [...activeItems, item];
      console.log(item);
      let newActiveItem = activeItems.pop(item);
      setActiveItems(newActiveItem);
    }
  };
  return (
    <ul className="list-group">
      {fruitItems.map((item) => (
        <Item
          key={item}
          fruitItem={item}
          bughtItem={activeItems.includes(item)}
          handleBuyBtn={(event) => onclickBuyBtn(event, item)}
          handleRmBtn={(event) => onclickRmBtn(event, item)}
        />
      ))}
    </ul>
  );
};

export default FruitsItems;
