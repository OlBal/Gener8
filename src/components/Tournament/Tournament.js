import React, { Component } from "react";
import "../../App.scss";
import { Link } from "react-router-dom";
import Semi from "../Semi";
import Final from "../Final";
import Matches from "../Matches";
import Button from "../Button/Button";

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    const { handleClear, round } = this.props;

    // The titles of the tournament are dictated by the round increments.

    return (
      <>
        <div classname="container__wrapper">
          <div className="container__tournament">
            <h2 className=" title__tournament">
              {round === 1
                ? "Quarter Finals"
                : round === 2
                ? "Semi-Finals"
                : round === 3
                ? "Final"
                : "Welcome To The Tournament"}
            </h2>
            <h3 className="title__match1">Match 1</h3>
            <h3 className="title__match2 ">Match 2</h3>
            <h3 className="title__match3 ">Match 3</h3>
            <h3 className="title__match4 ">Match 4</h3>
            <section className="container__roster round-one">
              <Matches />
            </section>
            <section className="container__roster semi-final">
              <h2 className="round__title"></h2>
              <Semi />
            </section>
            <section className="container__roster final">
              <Final />
            </section>
            <Link to={"/"} className="nav-link nav__tournament">
              <Button
                buttonClass="button settings"
                handleClick={handleClear}
                label="Reset"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Tournament;
