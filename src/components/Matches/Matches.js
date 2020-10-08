import React, { Component } from "react";
import "../../App.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champion: [],
      winningPlayers: [],
      selected: false,
    };
    this.handleAddWinners = this.handleAddWinners.bind(this);
    this.handleRound = this.handleRound.bind(this);
  }

  // Adds winners to a local array which is then sent
  // to the global array using the handleNextRound action.

  handleAddWinners = (e) => {
    const winner = e.target.value;
    this.setState({
      selected: !this.state.selected,
      winningPlayers: [...this.state.winningPlayers, winner],
    });
  };

  handleRound = () => {
    this.props.handleNextRound(this.state);
    this.setState({ winningPlayers: [] });
  };

  handleChampion = (e) => {
    const champ = e.target.value;
    this.setState({
      champion: [champ],
    });
  };

  render() {
    const { pairs, round, handleClear, roundWinners } = this.props;
    const { winningPlayers, selected, champion } = this.state;
    const disabled =
      winningPlayers.length === 4 && round === 1
        ? false
        : winningPlayers.length === 2 && round === 2
        ? false
        : winningPlayers.length === 1 && round === 3
        ? false
        : true;

    const semi = roundWinners[0];
    const final = roundWinners[1];

    //Here the array of player pairs is being interated over twice. Once to return the pairs from the parent array, and again to return the individual players.
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
                        handleClick={(e) => this.handleAddWinners(e, "value")}
                        label={names}
                        buttonClass={`${
                          selected === true ? "selected" : "block__player"
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
                        buttonClass={`${
                          selected === true ? "selected" : "block__player"
                        }`}
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
                        buttonClass={`${
                          selected === true ? "selected" : "block__player"
                        }`}
                        value={names}
                      />
                    ))}
                  </div>
                ))}
              </section>
            ) : (
              <section>
                <h1>{champion}</h1>
              </section>
            )}

            <Button
              buttonClass="block__next-round"
              label="Next Round"
              handleClick={this.handleRound}
              disabled={disabled}
            />

            <Link to={"/"} className="block__reset__tournament">
              <Button
                buttonClass="block__reset__tournament"
                handleClick={handleClear}
                label="Reset"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Matches;
