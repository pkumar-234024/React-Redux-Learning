import { useRef } from "react";
import { useDispatch } from "react-redux";

const Control = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrementt = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADDITION",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };
  const handleSub = () => {
    dispatch({
      type: "SUBTRACTION",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +
        </button>

        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrementt}
        >
          -
        </button>

        <button
          type="button"
          className="btn btn-warning btn-lg px-4 gap-3"
          onClick={handlePrivacyToggle}
        >
          Privacy
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          className="number-input"
          type="number"
          ref={inputElement}
          placeholder="Enter Number"
          required
        />

        <button
          type="button"
          className="btn btn-info btn-lg px-4 gap-3"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSub}
        >
          Subs
        </button>
      </div>
    </>
  );
};

export default Control;
