import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// This controls everything

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const [tasks, setTasks] = useState([]);

  // Delete Task
  const deleteTask = (id) => {
    console.log(`Task ${id} has been deleted `);
    // const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(tasks);
  };

  // Show Add Task Form
  const addTaskForm = () => {
    setShowForm(!showForm);
  };

  // Add a New Task
  const addTask = (text, date, reminder) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: text,
        date: date,
        reminder: reminder,
      },
    ]);
  };

  // Toggle the Reminder

  const toggleReminder = (id) => {
    // const taskToggle = tasks.find((task) => task.id === id);
    // Go through each task, and edit the reminder property if the task id matches
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header addTaskForm={addTaskForm} showForm={showForm} />
      {showForm ? <AddTask addTask={addTask} showForm={showForm} /> : ""}
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        setTasks={setTasks}
        toggleReminder={toggleReminder}
      />
    </div>
  );
};

export default App;
