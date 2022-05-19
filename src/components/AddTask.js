import React, { useState } from "react";

// When this is submitted, add a new task

const AddTask = ({ addTask }) => {
  // Using forms in react - useState and onChange={setState}
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text, date, reminder);

    if (!text) {
      alert("Please input a task");
      return;
    }

    // Reset values
    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form form-control" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <div>
        <label>Task</label>
        <input
          type="text"
          placeholder="Defrost the chicken"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label>Add Day and Time </label>
        <input
          type="text"
          placeholder="Feb 2 @ 5pm"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label>Set Reminder?</label>
        <input
          type="checkbox"
          onChange={(e) => setReminder(e.target.checked ? true : false)}
        />
      </div>
      <button type="submit" value="Save Task" className="btn btn-block">
        Save Task
      </button>
    </form>
  );
};

export default AddTask;
