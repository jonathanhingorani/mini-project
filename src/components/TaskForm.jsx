import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const TaskForm = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const nav = useNavigate();
  function handleAddTasks(event) {
    event.preventDefault();

    const newTasks = {
      title,
      description,
      id: tasks.length + 1,
    };
    setTasks([...tasks, newTasks]);
    nav("/");
  }
  return (
    <div>
      <h2>Add a task</h2>
      <form onSubmit={handleAddTasks}>
        <label>
          Task name:
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="enter your task title"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="enter your task description"
          />
        </label>
        <button>Add task</button>
      </form>
    </div>
  );
};

export default TaskForm;
