import React, { Component } from "react";
import "../../App.scss";
import Button from "../Button/Button";

class Semi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winningPlayers: [],
      selected: false,
    };
    this.handleAddWinners = this.handleAddWinners.bind(this);
    this.handleRound = this.handleRound.bind(this);
  }

  handleAddWinners = (e) => {
    const winner = e.target.value;
    this.setState({
      winningPlayers: [...this.state.winningPlayers, winner],
    });
  };

  handleRound = () => {
    this.props.handleNextRound(this.state);
  };

  render() {
    let { roundWinners, round } = this.props;
    const { winningPlayers, selected } = this.state;
    let round2 = roundWinners[0];
    let round3 = roundWinners[1];

    return (
      <>
        {round === 2
          ? round2.map((names, index) => (
              <Button
                key={index}
                handleClick={(e) => this.handleAddWinners(e, "value")}
                label={names}
                buttonClass={`${
                  selected === true ? "selected" : "block__player"
                }`}
                value={names}
              />
            ))
          : round === 3
          ? round3.map((names, index) => (
              <Button
                key={index}
                handleClick={(e) => this.handleAddWinners(e, "value")}
                label={names}
                buttonClass={`${
                  selected === true ? "selected" : "block__player"
                }`}
                value={names}
              />
            ))
          : null}
        <Button
          label="Next Round"
          handleClick={this.handleRound}
          disabled={winningPlayers.length === 2 ? false : true}
          buttonClass={`block__next-round ${
            round !== 2 ? "button__notActive" : null
          }`}
        />
      </>
    );
  }
}

export default Semi;
