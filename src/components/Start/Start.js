import React, { Component } from "react";
import PlayerList from "../PlayerList";
import Button from "./Button";
import Shuffle from "./Shuffle";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      players: [],
      pairs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
  }

  handleChange = (e) => {
    this.setState({ playerName: e.target.value });
  };

  handleAdd = (e) => {
    e.preventDefault();
    const { players, playerName } = this.state;

    this.setState({
      playerName: playerName,
      players: [...players, playerName],
    });
  };

  /* A Shuffle function to randomise and create new pairinng arrays */

  handleShuffle = () => {
    const { players, pairs } = this.state;
    const arr = [...players];
    this.setState({
      pairs: Shuffle(arr, 2),
    });
  };

  render() {
    const { players, playerName } = this.state;
    const disabled = players.length === 8 ? true : false;

    return (
      <div>
        <form>
          <input value={playerName} onChange={this.handleChange} />
          <Button
            label="Add A Player"
            type="submit"
            handleClick={this.handleAdd}
            disabled={disabled}
          />
        </form>
        <div className="pairs"></div>
        <Button label="Shuffle" handleClick={this.handleShuffle} />
        <PlayerList players={players} />
      </div>
    );
  }
}
export default Start;
