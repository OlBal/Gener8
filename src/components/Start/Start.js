import React, { Component } from "react";
import PlayerList from "../PlayerList";
import Button from "./Button";
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      players: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
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

  render() {
    const { players, playerName } = this.state;

    return (
      <div>
        <form>
          <input value={playerName} onChange={this.handleChange} />
          <Button
            label="Add A Player"
            type="submit"
            handleClick={this.handleAdd}
          />
        </form>
        <PlayerList players={players} />
      </div>
    );
  }
}
export default Start;
