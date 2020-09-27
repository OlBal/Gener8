import React, { Component } from "react";
import "../../App.scss";
import { Link } from "react-router-dom";
// import Semi from "../Semi";
// import Final from "../Final/Final";

import Button from "../Button/Button";
import Matches from "../Matches";

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winners: [],

      round: 0,
    };
  }
  handleClick = () => {
    const { winners } = this.state;
    this.setState({
      winners: winners,
    });
  };

  handleSubmit = () => {
    const { winners, round } = this.state;
    this.setState({ winners: winners, round: round + 1 });
    this.props.handleNextRound(this.state);
  };

  render() {
    const { winners } = this.state;
    return (
      <>
        <div className="container__tournament">
          <h1 className="title__App">PING PONG</h1>

          <section className="container__roster round-one">
            <Matches />
            <Button
              buttonClass="button"
              label="Next Round"
              handleClick={this.handleSubmit}
              disabled={winners.length === 4 ? false : true}
            />
          </section>

          <section className="container__roster semi-final">
            <h2 className="round__title"></h2>

            {/* <Semi /> */}
            <Button
              buttonClass="button"
              label="Next Round"
              handleClick={this.handleSubmit}
            />
          </section>

          <section className="container__roster final">
            {/* <Final /> */}
          </section>

          <Link to={"/"} className="nav-link nav__tournament">
            <Button buttonClass="button settings" label="Settings" />
          </Link>
        </div>
      </>
    );
  }
}

export default Tournament;
