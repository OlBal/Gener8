import React, { Component } from "react";
import PlayerList from "../PlayerList/PlayerList";
import Button from "../Button";
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: this.props.playerName,
      players: this.props.players,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange = (e) => {
    this.setState({ playerName: e.target.value });
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.props.handleAdd(e.currentTarget.value);
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

          <Button
            label="Start Tournament"
            type="submit"
            handleClick={this.handleSubmit}
          />

          <Button
            label="Reset Your Roster"
            type="submit"
            handleClick={this.handleReset}
          />
        </form>
        <PlayerList players={players} />
      </div>
    );
  }
}
export default Start;
