function Items(Props) {
  let fruits = Props.fruits;
  return (
    <>
      <li className="list-group-item">{fruits}</li>
    </>
  );
}

export default Items;
