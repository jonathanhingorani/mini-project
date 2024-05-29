import { useState } from 'react'
import taskListData from "../assets/tasks.json"
import React from 'react'

const TaskList = () => {
    console.log("here is the data", taskListData)
    const [task, setTask] = useState(taskListData);

    return (
    <div>TaskList</div>
       /* {task.map((oneTask) => {
            return(
                <div key={oneTask.id} className='task-card'>Hello</div>
                

                
            )
        })}*/
  )
}

export default TaskList;