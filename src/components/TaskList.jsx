import { useState } from 'react'
import taskListData from "../assets/tasks.json"
import React from 'react'

const TaskList = () => {
    console.log("here is the data", taskListData)
    const [task, setTask] = useState(taskListData);

    return (
    <div>TaskList</div>
     
  )
}

export default TaskList;