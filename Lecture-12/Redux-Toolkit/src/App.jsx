import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./feature/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  // fetching value from counter slice
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  const handleIncrementClick = () => {
    // dispatching increment action
    dispatch(increment());
  };

  const handleDecrementClick = () => {
    // dispatching decrement action
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count} </p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <br />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={handleIncrementByAmount}>Increment by Amount</button>
    </div>
  );
}

export default App;
