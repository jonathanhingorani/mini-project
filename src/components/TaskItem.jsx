import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-item">
      <Link to={`/details/${task.id}`}>
        <span>{task.title}</span>
      </Link>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
