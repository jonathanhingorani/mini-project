import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <Link to={`/details/${encodeURIComponent(task.task)}`}>
        <span>{task.task}</span>
      </Link>
    </div>
  );
};

export default TaskItem;
