import React, { Component } from "react";
import Settings from "../Settings";
import Tournament from "../Tournament";
class App extends Component {
  render() {
    return !this.props.view ? <Settings /> : <Tournament />;
  }
}

export default App;
