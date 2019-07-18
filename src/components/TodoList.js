import React, { Component } from "react";
import { connect } from "react-redux";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {
  addTodo,
  toggleDone,
  handleDeleteTodo,
  updateTodoToShow,
  updateToggleAllDone,
  removeAllDoneTodo
} from "../actions/Actions";

class TodoList extends Component {
  render() {
    const { todos, todoToShow } = this.props;
    console.log("todos", this.props);
    console.log("status", todoToShow);
    let localTodo = [];

    if (todoToShow === "all") {
      localTodo = todos;
    } else if (todoToShow === "active") {
      localTodo = todos.filter(todo => !todo.done);
    } else if (todoToShow === "done") {
      localTodo = todos.filter(todo => todo.done);
    }

    return (
      <div className="todo-list">
        <h1>TODOS</h1>
        <TodoForm onSubmit={todo => this.props.addTodo(todo)} />
        {localTodo.map(todo => (
          <Todo
            key={todo.id}
            toggleDone={() => this.props.toggleDone(todo.id)}
            todo={todo}
            onDelete={() => this.props.handleDeleteTodo(todo.id)}
          />
        ))}

        <div className="footer">
          <div className="todo-left">
            Todo Left: {todos.filter(todo => !todo.done).length}
          </div>
          <div className="all-active-done">
            <button
              className="all"
              onClick={() => this.props.updateTodoToShow("all")}
            >
              All
            </button>
            <button
              className="active"
              onClick={() => this.props.updateTodoToShow("active")}
            >
              Active
            </button>
            <button
              className="done"
              onClick={() => this.props.updateTodoToShow("done")}
            >
              Done
            </button>
          </div>
          <div className="toggle-all">
            <button
              className="toggle-all-btn"
              onClick={() => this.props.updateToggleAllDone()}
            >
              Toggle All Done: {`${this.props.toggleAllDone}`}
            </button>
          </div>
        </div>

        {todos.some(todo => todo.done) ? (
          <div>
            <button
              className="remove-all-done-btn"
              onClick={() => this.props.removeAllDoneTodo()}
            >
              <i className="fa fa-trash delete-icon" />
              Remove All Completed Todo
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
  toggleDone,
  handleDeleteTodo,
  updateTodoToShow,
  updateToggleAllDone,
  removeAllDoneTodo
};

function mapStateToProps(state) {
  return {
    todos: state.todoReducer.todos,
    todoToShow: state.todoReducer.todoToShow,
    toggleAllDone: state.todoReducer.toggleAllDone
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
