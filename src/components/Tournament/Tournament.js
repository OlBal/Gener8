import React, { Component } from "react";
import "../../App.scss";
import { Link } from "react-router-dom";
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
      <>
        <div className="container">
          <h1> PING PONG</h1>
          <h2> TOURNAMENT</h2>

          <h1>{pairs[0]}</h1>
          <h1>{pairs[1]}</h1>
          <h1>{pairs[2]}</h1>
          <h1>{pairs[3]}</h1>

          <Link to={"/"} className="nav-link nav__tournament">
            <Button label="back" handleClick={this.handleBack} />
          </Link>
        </div>
      </>
    );
  }
}

export default Tournament;
