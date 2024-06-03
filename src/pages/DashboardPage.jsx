import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const DashboardPage = () => {
  return (
    <div id="main">
      <h1>Task Dashboard</h1>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default DashboardPage;
