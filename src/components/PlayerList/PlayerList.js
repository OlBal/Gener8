import React, { Component } from "react";

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: this.props.playerName,
      players: console.log(this.props.players),
      pairs: this.props.pairs,
    };
  }

  render() {
    const { players } = this.state;
    return (
      <ul className="listGroup">
        {players.map((item, index) => (
          <li className="listItem" key={index}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default PlayerList;
