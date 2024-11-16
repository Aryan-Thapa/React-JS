import { useRef, useState } from "react";
import "./index.css";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  let val = useRef(0);
  let btnRef = useRef();

  const handleIncrement = () => {
    val.current = val.current + 1;
    console.log("Value is: ", val.current);
    setCount(count + 1);
  };
  const changeBtnClr = () => {
    btnRef.current.style.backgroundColor="red";
  };
  return (
    <div>
      <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <div>Count:{count}</div>

      <br />

      <button onClick={changeBtnClr}>Change Color of Increment Button</button>
    </div>
  );
}

export default App;
