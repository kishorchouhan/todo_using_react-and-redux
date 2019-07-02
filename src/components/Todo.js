import React from "react";

export default props => (
  <div
    style={{
      textDecoration: props.todo.done ? "line-through" : ""
    }}
    onClick={props.toggleDone}
  >
    {props.todo.text}
  </div>
);
