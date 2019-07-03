import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all"
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleDone = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToShow = input => {
    this.setState({
      todoToShow: input
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.done);
    } else if (this.state.todoToShow === "done") {
      todos = this.state.todos.filter(todo => todo.done);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleDone={() => this.toggleDone(todo.id)}
            todo={todo}
            onDelete={() => this.handleDeleteTodo(todo.id)}
          />
        ))}
        <div>
          Todo Left: {this.state.todos.filter(todo => !todo.done).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>All</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            Active
          </button>
          <button onClick={() => this.updateTodoToShow("done")}>Done</button>
        </div>
      </div>
    );
  }
}
