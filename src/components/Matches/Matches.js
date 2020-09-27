import React, { Component } from "react";
import "../../App.scss";
import Button from "../Button/Button";

class Matches extends Component {
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
      selected: !this.state.selected,
      winningPlayers: [...this.state.winningPlayers, winner],
    });
  };
  handleRound = () => {
    this.props.handleNextRound(this.state);
  };

  render() {
    const { pairs, round } = this.props;
    const { winningPlayers, selected } = this.state;

    return (
      <>
        {pairs.map((item, index) => (
          <div className="pairs container__roster__list" key={index}>
            {item.map((names, index) => (
              <Button
                key={index}
                handleClick={(e) => this.handleAddWinners(e, "value")}
                label={names}
                buttonClass="button player"
                value={names}
              />
            ))}
          </div>
        ))}

        <Button
          buttonClass={`button
          ${round !== 1 ? "button__notActive" : null}`}
          label="Next Round"
          handleClick={this.handleRound}
          disabled={winningPlayers.length === 4 ? false : true}
        />
      </>
    );
  }
}

export default Matches;
