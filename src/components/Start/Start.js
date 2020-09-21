import React, { Component } from "react";
import PlayerList from "../PlayerList/PlayerList";
import Button from "../Button/Button";
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: console.log(this.props.playerName, 1),
      players: this.props.players,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ playerName: e.target.value });
  };

  handleClick = () => {
    this.props.handleAdd(this.state.playerName);
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { players } = this.state;

  //   this.props.handleSave(players);
  // };

  render() {
    const { playerName } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={playerName} onChange={this.handleChange} />
          <Button
            label="Add A Player"
            type="submit"
            handleClick={this.handleClick}
          />

          {/* <Button
            label="Start Tournament"
            type="submit"
            handleClick={this.handleSubmit}
          /> */}

          <Button
            label="Reset Your Roster"
            handleClick={this.props.handleReset}
          />
        </form>
        {/* <PlayerList /> */}
      </div>
    );
  }
}
export default Start;
