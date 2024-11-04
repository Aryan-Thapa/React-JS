// import React from 'react'
const LogoutBtn = ({ toggleLogin }) => {
  return (
    <div>
      <button onClick={toggleLogin}>Logout</button>
    </div>
  );
};

export default LogoutBtn;
