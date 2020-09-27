import React, { Component } from "react";
import "../../App.scss";
import Button from "../Button/Button";

class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champion: "",
    };
    this.handleAddWinners = this.handleAddWinners.bind(this);
  }

  handleAddWinners = (e) => {
    const winner = e.target.value;
    this.setState({ champion: winner });
    console.log(winner);
  };

  render() {
    const { roundWinners } = this.props;
    const { winningPlayers } = this.state;
    return (
      <>
        {roundWinners.map((item, index) => (
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
          disabled={winningPlayers.length === 1 ? false : true}
        />
      </>
    );
  }
}

export default Final;
