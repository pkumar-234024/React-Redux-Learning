import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const counter = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter Current Value :{counter}</p>;
};

export default CounterDisplay;
