import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(0);

  // first type that runs on every render
  // useEffect(() => {
  //   alert(`The count is updated to: ${count}`);
  // });

  // Second type that runs on the first render
  // useEffect(() => {
  //   alert(`This runs on only first render`);
  // },[]);

  // Third type with dependency which runs when the dependency is updated or changed
  // useEffect(() => {
  //   alert(`This runs whenever count is changed`);
  // },[count]);

  // Fourth type with multiple dependency which depends on more than one dependency
  // useEffect(() => {
  //   alert("This runs whenever the count or target is changed");
  // }, [count, target]);

  // Fifth type with a cleanup function
  useEffect(() => {
    alert("This is a side effect of useeffect");

    return () => {
      alert("This is a cleanup function your count got unmounted");
    };
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleTarget = () => {
    setTarget(target + 1);
  };
  return (
    <div>
      <button onClick={handleCount}>Count</button>
      <p>The count is: {count}</p>

      <button onClick={handleTarget}>Target</button>
      <p>The target is: {target}</p>
    </div>
  );
}

export default App;
