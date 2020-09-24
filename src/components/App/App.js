import React, { Component } from "react";
import history from "../../data/history";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "../../App.scss";
import Settings from "../Settings";
import Tournament from "../Tournament";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Settings />
          </Route>
          <Route exact path="/Tournament">
            <Tournament />
            <div className="nav"></div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
