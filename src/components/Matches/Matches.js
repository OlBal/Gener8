import React, { Component } from "react";
import "../../App.scss";
import Button from "../Button/Button";

class Matches extends Component {
  render() {
    const { pairs } = this.props;
    return (
      <ul>
        {pairs.map((item, index) => (
          <div className="pairs container__roster__list" key={index}>
            {item.map((names, index) => (
              <button className="player">{names}</button>
            ))}
          </div>
        ))}
      </ul>
    );
  }
}

export default Matches;
