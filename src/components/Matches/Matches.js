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
    this.handleRound = this.handleRound.bind(this);
  }

  handleAddWinners = (e) => {
    const winner = e.target.value;
    console.log(winner);

    this.setState({ winners: [...this.state.winners, winner] });

    console.log(this.state.winners);
  };

  handleRound = () => {
    this.props.handleNextRound(this.state);
  };

  render() {
    const { pairs } = this.props;
    const { winners } = this.state;
    return (
      <>
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

        <Button
          buttonClass="button"
          label="Next Round"
          handleClick={this.handleRound}
          disabled={winners.length === 4 ? false : true}
        />
      </>
    );
  }
}

export default Matches;
