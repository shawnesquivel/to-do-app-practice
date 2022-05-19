import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, setTasks, toggleReminder }) => {
  // Task: if no tasks in the task list, show a statement. -- DONE

  return (
    <div>
      <h2>Your Tasklist </h2>
      {tasks.length !== 0 ? (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              setTasks={setTasks}
              toggleReminder={toggleReminder}
            />
          );
        })
      ) : (
        <>
          <p>All tasks are done, relax!</p>
        </>
      )}
    </div>
  );
};

export default Tasks;
