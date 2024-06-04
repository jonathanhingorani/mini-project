import React, { useState } from "react";
import { useNavigate } from "react-router";

const TaskForm = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const nav = useNavigate();

  const handleAddTasks = (event) => {
    event.preventDefault();

    const newTask = {
      title,
      description,
      id: tasks.length + 1,
    };
    setTasks([...tasks, newTask]);
    nav("/");
  };

  return (
    <div className="task-form">
      <h2>Add a task</h2>
      <form onSubmit={handleAddTasks}>
        <label>
          Task name:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter your task title"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)} //// Corrected to update the description state
            placeholder="Enter your task description"
          />
        </label>
        <button>Add task</button>
      </form>
    </div>
  );
};

export default TaskForm;

//setting the state. The onChange event handler was updating the title state instead of the description state. I corrected this by updating the setDescription function in the onChange handler.
// Description on Line 15 and corrected on line 40
