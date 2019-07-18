import React, { Component } from "react";
import { connect } from "react-redux";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { addTodo, toggleDone, handleDeleteTodo } from "../actions/Actions";

class TodoList extends Component {
  // state = {
  //   // todos: [],
  //   todoToShow: "all",
  //   toggleAllDone: true
  // };

  // DONE----
  // addTodo = todo => {
  //   this.setState(state => ({
  //     todos: [todo, ...state.todos]
  //   }));
  // };

  // toggleDone = id => {
  //   this.setState(state => ({
  //     todos: state.todos.map(todo => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           done: !todo.done
  //         };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   }));
  // };-----

  // updateTodoToShow = input => {
  //   this.setState({
  //     todoToShow: input
  //   });
  // };

  // handleDeleteTodo = id => {
  //   this.setState(state => ({
  //     todos: state.todos.filter(todo => todo.id !== id)
  //   }));
  // };

  // removeAllDoneTodo = () => {
  //   this.setState(state => ({
  //     todos: state.todos.filter(todo => !todo.done)
  //   }));
  // };

  render() {
    const { todos } = this.props;
    console.log("todos", this.props);
    return (
      <div className="todo-list">
        <h1>TODOS</h1>
        <TodoForm onSubmit={todo => this.props.addTodo(todo)} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleDone={() => this.props.toggleDone(todo.id)}
            todo={todo}
            onDelete={() => this.props.handleDeleteTodo(todo.id)}
          />
        ))}
      </div>
    );
  }
  // render() {
  //   let todos = [];

  //   if (this.state.todoToShow === "all") {
  //     todos = this.state.todos;
  //   } else if (this.state.todoToShow === "active") {
  //     todos = this.state.todos.filter(todo => !todo.done);
  //   } else if (this.state.todoToShow === "done") {
  //     todos = this.state.todos.filter(todo => todo.done);
  //   }

  //   return (
  //     <div className="todo-list">
  //       <h1>TODOS</h1>
  //       <TodoForm onSubmit={this.addTodo} />
  //       {todos.map(todo => (
  //         <Todo
  //           key={todo.id}
  //           toggleDone={() => this.toggleDone(todo.id)}
  //           todo={todo}
  //           onDelete={() => this.handleDeleteTodo(todo.id)}
  //         />
  //       ))}

  //       <div className="footer">
  //         <div className="todo-left">
  //           Todo Left: {this.state.todos.filter(todo => !todo.done).length}
  //         </div>
  //         <div className="all-active-done">
  //           <button
  //             className="all"
  //             onClick={() => this.updateTodoToShow("all")}
  //           >
  //             All
  //           </button>
  //           <button
  //             className="active"
  //             onClick={() => this.updateTodoToShow("active")}
  //           >
  //             Active
  //           </button>
  //           <button
  //             className="done"
  //             onClick={() => this.updateTodoToShow("done")}
  //           >
  //             Done
  //           </button>
  //         </div>
  //         <div className="toggle-all">
  //           <button
  //             className="toggle-all-btn"
  //             onClick={() =>
  //               this.setState(state => ({
  //                 todos: state.todos.map(todo => ({
  //                   ...todo,
  //                   done: state.toggleAllDone
  //                 })),
  //                 toggleAllDone: !state.toggleAllDone
  //               }))
  //             }
  //           >
  //             Toggle All Done: {`${this.state.toggleAllDone}`}
  //           </button>
  //         </div>
  //       </div>
  //       {this.state.todos.some(todo => todo.done) ? (
  //         <div>
  //           <button
  //             className="remove-all-done-btn"
  //             onClick={this.removeAllDoneTodo}
  //           >
  //             <i className="fa fa-trash delete-icon" />
  //             Remove All Completed Todo
  //           </button>
  //         </div>
  //       ) : null}
  //     </div>
  //   );
  // }
}

const mapDispatchToProps = {
  addTodo,
  toggleDone,
  handleDeleteTodo
};

function mapStateToProps(state) {
  return {
    todos: state.todoReducer.todos
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
