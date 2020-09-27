import React, { Component } from "react";
import "../../App.scss";
import Button from "../Button/Button";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winners: [],
    };
    this.handleAddWinners = this.handleAddWinners.bind(this);
  }

  handleAddWinners(e) {
    const winner = e.target.value;

    this.setState({ winners: [...this.state.winners, winner] });

    console.log(this.state.winners);
    this.props.handleAddWinners(this.state);
  }

  render() {
    const { pairs } = this.props;

    return (
      <>
        <ul>
          {pairs.map((item, index) => (
            <div className="pairs container__roster__list" key={index}>
              {item.map((names, index) => (
                <Button
                  key={index}
                  handleClick={(e) => this.handleAddWinners(e, "value")}
                  label={names}
                  buttonClass="button player"
                  value={names}
                />
              ))}
            </div>
          ))}
        </ul>
      </>
    );
  }
}

export default Matches;
