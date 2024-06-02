import Items from "./Items";

function FruitItems(Props) {
  let fruits = Props.fruits;
  return (
    <>
      <ul className="list-group">
        {fruits.length == 0 ? null : null}
        {fruits.map((item) => (
          <Items key={item} fruits={item} />
        ))}
      </ul>
    </>
  );
}

export default FruitItems;
