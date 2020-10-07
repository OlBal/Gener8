import React, { Component } from "react";
import "../../App.scss";
import Button from "../Button/Button";

class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champion: [],
    };
    this.handleAddWinners = this.handleAddWinners.bind(this);
  }

  handleAddWinners = (e) => {
    const winner = e.target.value;
    this.setState({ champion: winner });
    console.log(winner);
  };

  render() {
    const { roundWinners, round } = this.props;
    const { champion } = this.state;
    return (
      <>
        {roundWinners.map((names, index) => (
          <Button
            key={index}
            handleClick={(e) => this.handleAddWinners(e, "value")}
            label={names}
            buttonClass="block__player"
            value={names}
          />
        ))}

        <Button
          buttonClass={`block__next-round ${
            round !== 3 ? "button__notActive" : null
          }`}
          label="Winner?"
          handleClick={this.handleRound}
          disabled={champion.length === 1 ? false : true}
        />
      </>
    );
  }
}

export default Final;
