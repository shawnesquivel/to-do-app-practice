import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

// task: pass down title as a prop

const Header = ({ title, addTaskForm, showForm }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        color={showForm ? "red" : "green"}
        showForm={addTaskForm}
        text={showForm ? "Hide Form" : "Add Task"}
      />
    </div>
  );
};

// defaultProps - set a default title if nothing is passed as a prop
Header.defaultProps = {
  title: "Task Tracker",
};

// propTypes - set a required type for the prop that is passed down
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
