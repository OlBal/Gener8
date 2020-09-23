import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Settings from "../Settings";
import Tournament from "../Tournament";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Settings />
        </Route>
        <Route exact path="/Tournament">
          <Tournament />
          <div className="nav"></div>
        </Route>
      </Router>
    );
  }
}

export default App;
