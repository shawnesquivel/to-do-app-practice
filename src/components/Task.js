import React from "react";
import { ImCross } from "react-icons/im";

// Task: When the ImCross button is clicked, delete the task
// (1) The button is clicked, the event will be logged --  done
// (2) Get the task.id or the key -- done
// (3) The Tasks array must be updated to delete that task from the Tasks list -- CURRENTLY
//  - how do I send the task list upwards?
// (4) The component is re-rendered

const Task = ({ task, tasks, deleteTask, setTasks }) => {
  return (
    <div key={task.id} className="task">
      <h3>
        {task.text}

        <ImCross
          key={task.id}
          onClick={() => deleteTask(task.id)}
          style={{ color: "red" }}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
