import React, { Component } from "react";

class Players extends Component {
  render() {
    const { players } = this.props;
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

export default Players;
