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
        <div className="container__tournament">
          <h1 className="title__App"> PING PONG</h1>
          <h2> TOURNAMENT</h2>
          <section className="container__roster round-one">
            <div className="pairs pair__one">
              <h1 className="title__player">{pairs[0][0]}</h1>
              <h1 className="title__player">{pairs[0][1]}</h1>
            </div>
            <div className="pairs pair__two">
              <h1 className="title__player">{pairs[1][0]}</h1>
              <h1 className="title__player">{pairs[1][1]}</h1>
            </div>
            <div className="pairs pair__three">
              <h1 className="title__player">{pairs[2][0]}</h1>
              <h1 className="title__player">{pairs[2][1]}</h1>
            </div>
            <div className="pairs pair__three">
              <h1 className="title__player">{pairs[3][0]}</h1>
              <h1 className="title__player">{pairs[3][1]}</h1>
            </div>
          </section>

          <section className="container__roster semi-final"></section>

          <section className="container__roster final"></section>

          <Link to={"/"} className="nav-link nav__tournament">
            <Button label="Settings" handleClick={this.handleBack} />
          </Link>
        </div>
      </>
    );
  }
}

export default Tournament;
