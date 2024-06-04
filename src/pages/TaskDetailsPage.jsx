import React from "react";
import { useParams } from "react-router-dom";

const TaskDetailsPage = ({ tasks }) => {
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id === parseInt(taskId));

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div className="task-details">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetailsPage;
