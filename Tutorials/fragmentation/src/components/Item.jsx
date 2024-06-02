import style from "./Item.module.css";
const Item = ({ fruitItem, bughtItem, handleBuyBtn, handleRmBtn }) => {
  // let onClickHandle = (event) => {
  //   console.log(event);
  //   console.log(`${props.fruitItem} being bought`);
  // };

  return (
    <div className={style.itemDiv}>
      <li className={`list-group-item ${bughtItem && "active"}`}>
        <span className={style.itemDisplay}>
          {fruitItem}
          {bughtItem ? (
            <button
              className={`${style.btnRmDisplay} btn btn-danger`}
              onClick={handleRmBtn}
            >
              remove
            </button>
          ) : (
            <button
              className={`${style.btnBuyDisplay} btn btn-primary`}
              onClick={handleBuyBtn}
            >
              Buy
            </button>
          )}
        </span>
      </li>
    </div>
  );
};
export default Item;
