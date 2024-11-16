import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  let timeRef = useRef(null);

  function handleStart() {
    timeRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    console.log(timeRef);
  }

  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };
  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <br />
      <button onClick={handleStart}>Start</button>
      <br />
      <button onClick={handleStop}>Stop</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
