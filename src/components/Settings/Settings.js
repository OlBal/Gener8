import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.scss";
import Players from "../Players";
import Button from "../Button/Button";

//

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleAddName = this.handleAddName.bind(this);
  }

  // Watches value in form for player's input

  handleChange = (e) => {
    this.setState({ playerName: e.target.value });
  };

  // Add new player to players array

  handleAddName = (e) => {
    e.preventDefault();
    this.setState({ playerName: this.state.playerName });
    this.props.handleAdd(this.state);
  };

  /* Shuffle function to randomise & create new pairings */

  handleStart = () => {
    this.props.handleStart(this.state);
  };

  render() {
    const { playerName } = this.state;
    const { players, handleClear } = this.props;
    const disabled = players.length === 8 ? true : false;

    return (
      <div className="container">
        <h1 className="title__app title__app__settings"> PING PONG</h1>
        <form className="form " onSubmit={this.handleAddName}>
          <input
            required
            className="form-control"
            type="text"
            value={playerName}
            onChange={this.handleChange}
            disabled={disabled}
          />
          <Button
            buttonClass="button button__form"
            label="Add A Player"
            type="submit"
            disabled={disabled}
          />
        </form>
        <Link to={"/Tournament"} className="nav nav__settings grid-child1">
          <Button
            buttonClass="button grid-child1--colour "
            label="Start"
            handleClick={this.handleStart}
            disabled={players.length !== 8 ? true : false}
          />
        </Link>

        <Button
          buttonClass="button grid-child2"
          label="Reset"
          handleClick={handleClear}
        />
        <article className="player-list">
          <h1 className="title__app title__app__settings">Players</h1>
          <Players />
        </article>

        <div className="circle"></div>

        <div className="circle--red"></div>
      </div>
    );
  }
}

export default Settings;
