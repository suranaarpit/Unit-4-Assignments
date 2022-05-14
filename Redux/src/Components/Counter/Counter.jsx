import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Reset } from "../../redux/Counter/action";

const Counter = () => {
  const Count = useSelector((state) => state.count.count);
  console.log("Count:", Count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {Count}</h1>
      <button onClick={() => dispatch(Increment(5))}>Increment by 3</button>
      <button onClick={() => dispatch(Decrement(2))}>Decrement by 2</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
};

export default Counter;
