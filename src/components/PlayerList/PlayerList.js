import React, { Component } from "react";

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.players,
    };
  }

  render() {
    return;
    <>
      <ul className="playerListGroup">
        {this.props.players.map((item, index) => (
          <li className="playerList" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>;
  }
}
export default PlayerList;
