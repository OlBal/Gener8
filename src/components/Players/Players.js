import React, { Component } from "react";
import "../../App.scss";
class Players extends Component {
  render() {
    const { players } = this.props;
    return (
      <ul className="listGroup">
        {players.map((item, index) => (
          <div className="list-item__edit">
            <li className="list-item " key={index}>
              {item}
            </li>
          </div>
        ))}
      </ul>
    );
  }
}

export default Players;
