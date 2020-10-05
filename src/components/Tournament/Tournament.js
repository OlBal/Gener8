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
            <section className="container__roster block__round-one ">
              <Matches className="round-one__match" />
            </section>

            <section className="container__roster semi-final block__semi ">
              <Semi />
            </section>

            <section className="container__roster block__final">
              <Final />
            </section>
          </div>
          <Link to={"/"} className="">
            <Button
              buttonClass="block__reset__tournament"
              handleClick={handleClear}
              label="Reset"
            />
          </Link>
        </div>
      </>
    );
  }
}

export default Tournament;
