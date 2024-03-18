import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to my React app",
      counter: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <button onClick={this.handleButtonClick}>Click me</button>
        <p>You have clicked the button {this.state.counter} times.</p>
      </div>
    );
  }
}

export default App;
