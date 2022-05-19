import React, { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, setTasks }) => {
  // Task: Toggle Show Reminder
  // Task: if no tasks in the task list, show a statement.

  return (
    <div>
      <h2>Your Tasklist </h2>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setTasks={setTasks}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
