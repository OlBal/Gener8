import React, { Component } from "react";
import "../../App.scss";

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
      <div className="wrapper__container">
        <div className="container">
          <h1> PING PONG</h1>
          <h2> TOURNAMENT</h2>

          <form className="form grid-child1" onSubmit={this.onSubmit}>
            <input
              className="form-control"
              type="text"
              value={playerName}
              onChange={this.handleChange}
            />
            <Button
              buttonClass="button grid-child2"
              label="Add A Player"
              type="submit"
            />
          </form>

          <Button
            buttonClass="button grid-child3"
            label="Shuffle"
            handleClick={this.handleShuffle}
          />

          <Button
            buttonClass="button grid-child4"
            label="Reset"
            handleClick={this.handleReset}
          />
          <PlayerList />
        </div>
      </div>
    );
  }
}

export default Start;
