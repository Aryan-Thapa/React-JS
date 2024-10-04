// import React from 'react'
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-black text-white w-[20rem] p-8 rounded-xl">
      <p>Button clicked {count} times</p>
      <button className="bg-blue-500 p-2 rounded-lg" onClick={handleCounter}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
