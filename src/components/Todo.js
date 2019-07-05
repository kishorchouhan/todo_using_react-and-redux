import React from "react";
import "./Todo.css";

export default props => (
  <div className="todo" style={{ display: "flex", justifyContent: "center" }}>
    <div
      className="todo-text"
      style={{
        textDecoration: props.todo.done ? "line-through" : ""
      }}
      onClick={props.toggleDone}
    >
      {props.todo.text}
    </div>
    <i className="fa fa-trash todo-delete-icon" onClick={props.onDelete} />
  </div>
);
