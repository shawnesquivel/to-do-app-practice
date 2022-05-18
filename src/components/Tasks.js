import React, { useState } from "react";

const Tasks = ({ tasks }) => {
  // Task: Toggle Show Reminder

  return (
    <div>
      <h2>Your Tasklist </h2>
      {tasks.map((task) => {
        return (
          <div key={task.id} className="task">
            <h3>{task.text}</h3>
            <p>{task.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
