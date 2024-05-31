import { useState } from "react";
import taskListData from "../assets/tasks.json";
import React from "react";

const TaskList = () => {
  console.log("here is the data", taskListData);
  const [task, setTask] = useState(taskListData);

  return (
    <div>
      TaskList
      {task.map((oneTask) => {
        return (
          <div>
            <h4>{oneTask.task}</h4>
            {oneTask.completed ? "completed" : "not completed"}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
