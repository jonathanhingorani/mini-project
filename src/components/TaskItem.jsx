import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-item">
      <span>{task.name}</span>
      {task.isCompleted ? <span>✅</span> : <span>❌</span>}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;