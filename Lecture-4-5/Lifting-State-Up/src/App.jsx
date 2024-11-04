import { useState } from "react";
import Card from "./components/Card";
function App() {
  const [name, setName] = useState("");
  return (
    <div>
      <Card name={name} setName={setName}/>
      <p>I am inside parent element and Name is: {name}</p>
    </div>
  );
}

export default App;

