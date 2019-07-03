import React, { Component } from "react";
import shortid from "shortid";

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
          name="text"
          placeholder="Todo..."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}
