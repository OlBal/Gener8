import React, { Component } from "react";
import "../../App.scss";
import Matches from "../Matches";

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    return (
      <>
        <Matches />
        {/* <Winner /> */}
      </>
    );
  }
}

export default Tournament;
