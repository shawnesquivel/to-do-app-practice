import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// This controls everything

const App = () => {
  const DATABASE_URL = "http://localhost:5000/tasks";

  const [showForm, setShowForm] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromDB = await fetchTasks();
      setTasks(tasksFromDB);
    };
    getTasks();
  }, [tasks]);

  // Fetch Tasks
  const fetchTasks = async () => {
    const result = await fetch(DATABASE_URL);
    const data = await result.json();
    return data;
  };
  // Fetch A Single Task (to update its properties)
  const fetchTask = async (id) => {
    const result = await fetch(`${DATABASE_URL}/${id}`);
    const data = await result.json();
    return data;
  };

  // Delete Task
  const deleteTask = async (id) => {
    console.log(`Task ${id} has been deleted `);
    await fetch(`${DATABASE_URL}/${id}`, {
      method: "DELETE",
    });

    // Local Data
    // setTasks(tasks.filter((task) => task.id !== id));

    // JSON Server
    // const tasksFromDB = await fetchTasks();
    // setTasks(tasksFromDB);
    // console.log(tasks);
  };

  // Show Add Task Form
  const addTaskForm = () => {
    setShowForm(!showForm);
  };

  // Add a New Task to the DB.JSON SERVER
  const addTask = async (text, date, reminder) => {
    // Old version - with local data
    // setTasks([
    //   ...tasks,
    //   {
    //     id: tasks.length + 1,
    //     text: text,
    //     date: date,
    //     reminder: reminder,
    //   },
    // ]);

    // Task: Create a POST Request to add a new object to the database
    const id = tasks.length + 1;
    const data = {
      id: id,
      text: text,
      date: date,
      reminder: reminder,
    };

    const res = await fetch(DATABASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataToAdd = await res.json();

    setTasks([...tasks, dataToAdd]);
  };

  // Toggle the Reminder

  const toggleReminder = async (id) => {
    // const taskToggle = tasks.find((task) => task.id === id);
    // Go through each task, and edit the reminder property if the task id matches
    // Old Way - Local Server
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, reminder: !task.reminder } : task
    //   )
    // );
    // With Data base

    // First, get the task (AWAIT/FETCH)
    const taskRes = await fetchTask(id);
    const updatedTask = {
      ...taskRes,
      reminder: !taskRes.reminder,
    };

    // Next, update the database (PUT)
    const res = await fetch(`${DATABASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
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
