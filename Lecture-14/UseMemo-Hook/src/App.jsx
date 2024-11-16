import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const expensiveTask = (num) => {
    console.log("Inside expensive task");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  };

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  // let doubleValue = expensiveTask(input);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>

      <input
        type="number"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Double: {doubleValue}</div>
    </div>
  );
}

export default App;
