import React from "react";

const ListItem = ({ task, onDelete }) => {
  return (
    <div className="task-item">
      <span>{task.task}</span>
      <button onClick={() => onDelete(task.task)}>Delete</button>
    </div>
  );
};

export default ListItem;
