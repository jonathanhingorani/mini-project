import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const DashboardPage = ({ tasks, setTasks }) => {
  return (
    <div id="main">
      <h1>Task Dashboard</h1>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default DashboardPage;
