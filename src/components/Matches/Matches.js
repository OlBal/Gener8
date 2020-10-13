import React, { Component } from "react";
import "../../App.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champ: [],
      winningPlayers: [],
      selected: "",
    };
    this.handleAddWinners = this.handleAddWinners.bind(this);
    this.handleRound = this.handleRound.bind(this);
  }

  // Adds winners to a local array which is then sent
  // to the global array using the handleNextRound action.

  handleAddWinners = (e) => {
    const winner = e.target.value;
    const { champ } = this.state;
    const { round } = this.props;

    if (round !== 3) {
      this.setState({
        selected: winner,
        winningPlayers: [...this.state.winningPlayers, winner],
      });
    } else {
      this.setState({ champ: [...champ, winner] });
    }
  };

  handleRound = () => {
    const { round, handleNextRound, handleChampion } = this.props;

    round !== 3 ? handleNextRound(this.state) : handleChampion(this.state);

    this.setState({ winningPlayers: [] });
  };

  render() {
    const { pairs, round, handleClear, roundWinners, champion } = this.props;
    const { winningPlayers, selected, champ } = this.state;
    const semi = roundWinners[0];
    const final = roundWinners[1];
    const champName = champion.map((item) => item);
    const reset =
      round !== 4 ? "block__reset__tournament" : "block__reset__new-game";
    const newGame = `${round !== 4 ? "Reset" : "New Game?"}`;
    const buttonClick = `${selected ? "selected" : "block__player"}`;
    const disabled =
      winningPlayers.length === 4 && round === 1
        ? false
        : winningPlayers.length === 2 && round === 2
        ? false
        : champ.length === 1 && round === 3
        ? false
        : true;

    return (
      <>
        <div classname="container__wrapper">
          <div className="container__tournament">
            {round === 1 ? (
              <section className="block__round ">
                {pairs.map((item, index) => (
                  <div className="pairs" key={index}>
                    {item.map((names, index) => (
                      <Button
                        key={index}
                        handleClick={(e) => this.handleAddWinners(e)}
                        label={names}
                        buttonClass={`${
                          selected === winningPlayers
                            ? "selected"
                            : "block__player"
                        }`}
                        value={names}
                      />
                    ))}
                  </div>
                ))}
              </section>
            ) : round === 2 ? (
              <section className="block__round ">
                {semi.map((names, index) => (
                  <div className="pairs" key={index}>
                    {names.map((names, index) => (
                      <Button
                        key={index}
                        handleClick={(e) => this.handleAddWinners(e, "value")}
                        label={names}
                        buttonClass={buttonClick}
                        value={names}
                      />
                    ))}
                  </div>
                ))}
              </section>
            ) : round === 3 ? (
              <section className="block__round ">
                {final.map((names, index) => (
                  <div className="pairs" key={index}>
                    {names.map((names, index) => (
                      <Button
                        key={index}
                        handleClick={(e) => this.handleAddWinners(e, "value")}
                        label={names}
                        buttonClass={buttonClick}
                        value={names}
                      />
                    ))}
                  </div>
                ))}
              </section>
            ) : (
              <section className="block__champion">
                <p className="champion__greeting">
                  Congratulations&nbsp;
                  <br />
                  <span className="champion__name">{champName}!</span>
                  <br /> You've won the whole shebang!
                </p>
              </section>
            )}

            <Button
              buttonClass={`${
                round !== 4 ? "block__next-round" : "button__notActive"
              }`}
              label={`${round !== 3 ? "Next Round" : "See Winner"}`}
              handleClick={this.handleRound}
              disabled={disabled}
            />

            <Link to={"/"} className={reset}>
              <Button
                buttonClass={reset}
                handleClick={handleClear}
                label={newGame}
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Matches;
