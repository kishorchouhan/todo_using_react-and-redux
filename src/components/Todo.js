import React from "react";

export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.todo.done ? "line-through" : ""
      }}
      onClick={props.toggleDone}
    >
      {props.todo.text}
    </div>
    <i
      className="material-icons"
      style={{ color: "red", cursor: "default" }}
      onClick={props.onDelete}
    >
      delete
    </i>
  </div>
);
