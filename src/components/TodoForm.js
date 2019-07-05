import React, { Component } from "react";
import shortid from "shortid";
import "./TodoForm.css";

export default class TodoForm extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value //
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text) {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        done: false
      });
      this.setState({
        text: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input-field"
          name="text"
          placeholder="What needs to be done?"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button className="add-todo-button" onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}
