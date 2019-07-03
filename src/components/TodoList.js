import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  state = {
    todos: []
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

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo
            key={todo.id}
            toggleDone={() => this.toggleDone(todo.id)}
            todo={todo}
          />
        ))}
        <div>Todo Left: {this.state.todos.filter(todo => !todo.done).length}</div>
      </div>
    );
  }
}
