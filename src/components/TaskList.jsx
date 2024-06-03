import React, { useState } from "react";
import tasksData from "../assets/tasks.json";

const TaskList = () => {
  const [tasks, setTasks] = useState(tasksData);

  const handleDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <span>{task.task}</span>
          <button onClick={() => handleDelete(task.task)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
