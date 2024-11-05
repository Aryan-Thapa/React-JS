function App() {
  const handleClick = () => {
    alert("I am clicked");
  };
  const handleMouseOver = () => {
    alert("I got hovered");
  };
  const handleForm = () => {
    alert("Form is submitted");
  };
  const handleChange = (e) => [console.log("Text field has:", e.target.value)];
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p onMouseOver={handleMouseOver}>I am a para</p>

      <form action="" onSubmit={handleForm}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
