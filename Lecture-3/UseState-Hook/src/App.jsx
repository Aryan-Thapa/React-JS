import Counter from "./components/Counter";
function App() {
  return (
    <div className="flex flex-col justify-between items-center h-[50vh]">
      <h1 className="text-center m-2 font-bold text-3xl">UseState-Hook</h1>
      <Counter />
    </div>
  );
}

export default App;
