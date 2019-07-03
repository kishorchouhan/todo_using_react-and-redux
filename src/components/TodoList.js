import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllDone: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleDone = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = input => {
    this.setState({
      todoToShow: input
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  removeAllDoneTodo = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.done)
    }));
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
        {this.state.todos.some(todo => todo.done) ? (
          <div>
            <button onClick={this.removeAllDoneTodo}>
              Remove All Done Todo
            </button>
          </div>
        ) : null}
        <div>
          <button
            onClick={() =>
              this.setState(state => ({
                todos: state.todos.map(todo => ({
                  ...todo,
                  done: state.toggleAllDone
                })),
                toggleAllDone: state.toggleAllDone
              }))
            }
          >
            Toggle All Done: {`${this.state.toggleAllDone}`}
          </button>
        </div>
      </div>
    );
  }
}
