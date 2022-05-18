import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// This is the entry point for the React App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const index = () => {
  return <div>index</div>;
};

export default index;
