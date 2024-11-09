// import React from 'react'

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleCourses = () => {
    navigate("courses");
  };

  const handleReports = () => {
    navigate("reports");
  };
  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={handleCourses}>Courses</button>
      <button onClick={handleReports}>Reports</button>
      <Outlet />
    </div>
  );
};

export default Dashboard;
