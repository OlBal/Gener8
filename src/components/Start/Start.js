import React, { Component } from "react";
import PlayerList from "../PlayerList";
import Button from "./Button";
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
    const { players, playerName } = this.state;
    e.preventDefault();
    this.setState({
      playerName: playerName,
      players: [...players, playerName],
    });
  };

  handleShuffle = () => {
    const { players } = this.state;
    this.setState({
      players: players.sort(() => Math.random() - 0.5),
    });
  };

  render() {
    const { players, playerName } = this.state;

    return (
      <div>
        <form onSubmit="this.reset()">
          <input value={playerName} onChange={this.handleChange} />
          <Button
            label="Add A Player"
            type="submit"
            handleClick={this.handleAdd}
            disabled={players.length === 8 ? true : false}
          />
        </form>
        <Button label="Shuffle" handleClick={this.handleShuffle} />
        <PlayerList players={players} />
      </div>
    );
  }
}
export default Start;
