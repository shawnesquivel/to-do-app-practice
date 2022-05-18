import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, showForm }) => {
  return (
    <div>
      <button
        onClick={showForm}
        className="btn"
        style={{ backgroundColor: color, width: "125px" }}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: "Add Task",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  showForm: PropTypes.func,
};

export default Button;
