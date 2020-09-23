import React, { Component } from "react";
import "../../App.scss";
import Button from "../Button/Button";

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* Handles reset of viewSetting's state to go 
  back to home screen */

  handleBack = () => {
    this.props.handleBackButton(this.state);
  };

  render() {
    const { pairs } = this.props;
    return (
      <div className="wrapper__container">
        <div className="container">
          <h1> PING PONG</h1>
          <h2> TOURNAMENT</h2>

          <h1>{pairs[0]}</h1>
          <h1>{pairs[(0)[1]]}</h1>
          <h1>{pairs[0]}</h1>

          <Button label="back" handleClick={this.handleBack} />
        </div>
      </div>
    );
  }
}

export default Tournament;
