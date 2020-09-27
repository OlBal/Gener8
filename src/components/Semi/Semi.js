import React, { Component } from "react";
import Button from "../Button";

class Semi extends Component {
  render() {
    const { pairs } = this.props;

    return;
    <ul>
      {pairs.map((item, index) => (
        <div className="pairs container__roster__list" key={index}>
          {item.map((names, index) => (
            <Button
              key={index}
              handleClick={this.handleAdd}
              label={names}
              buttonClass="button player"
            />
          ))}
        </div>
      ))}
    </ul>;
  }
}
export default Semi;
