import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "../../App.scss";
import Settings from "../Settings";
import Tournament from "../Tournament/Tournament";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/">
            <Settings />
          </Route>
          <Route exact path="/Tournament">
            <Tournament />
            <div className="nav"></div>
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
