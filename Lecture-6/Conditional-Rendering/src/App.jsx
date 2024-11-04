import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      {isLoggedIn ? (
        <LogoutBtn toggleLogin={toggleLogin} />
      ) : (
        <LoginBtn toggleLogin={toggleLogin} />
      )}
    </div>
  );
}

export default App;
