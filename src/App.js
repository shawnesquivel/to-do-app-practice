import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

// This controls everything

//

const showForm = (e) => {
  console.log(e);
  console.log("show the form");
};

const App = () => {
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
      reminder: false,
    },
    {
      id: 4,
      text: "Coding Interview w/ Kevin @ Hexa Exchange",
      date: "May 20 @ 5PM",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header showForm={showForm} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
