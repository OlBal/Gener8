import React, { Component } from "react";
import "../../../src/scss/App.scss";

import PlayerList from "../PlayerList";
import Button from "../Button/Button";
import shuffle from "./shuffle";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: this.props.playerName,
      players: this.props.players,
      pairs: this.props.pairs,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /* Watches value in form for player's input */

  handleChange = (e) => {
    this.setState({ playerName: e.target.value });
  };

  /* Add new player to players array */
  onSubmit = (e) => {
    e.preventDefault();
    const { players, playerName } = this.state;

    this.setState({
      playerName: playerName,
      players: [...players, playerName],
    });
  };

  /* Shuffle function to randomise & create new pairings */

  handleShuffle = () => {
    const arr = [...this.state.players];
    this.setState({
      pairs: shuffle(arr, 2),
    });
  };

  render() {
    const { playerName } = this.state;
    // const disabled = this.props.players.length === 8 ? true : false;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            value={playerName}
            onChange={this.handleChange}
          />
          <Button label="Add A Player" type="submit" />
        </form>

        <Button label="Shuffle" handleClick={this.handleShuffle} />
        <Button label="Reset" handleClick={this.handleReset} />
        <PlayerList />
      </div>
    );
  }
}

export default Start;
