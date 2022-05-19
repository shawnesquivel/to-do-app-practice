import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// This controls everything

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Appointment with Dr. Lang",
      date: "May 24 @ 5PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Date Night with Shay",
      date: "May 30 @ 2pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Water Your Plants",
      date: "June 21 @ 2pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Coding Interview w/ Kevin @ Hexa Exchange",
      date: "May 20 @ 5PM",
      reminder: true,
    },
  ]);

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
      <Header addTaskForm={addTaskForm} />
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
