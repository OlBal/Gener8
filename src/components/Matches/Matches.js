import React, { Component } from "react";
import "../../App.scss";
import Button from "../Button/Button";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: 0,
      p1Score: 0,
      p2Score: 0,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    const { pairs } = this.props;

    if (pairs.map((item) => item.map((names) => names[0]))) {
      this.setState({
        p1Score: 1,
      });
    } else if (pairs.map((item) => item.map((names) => names[1]))) {
      this.setState({
        p2Score: 1,
      });
    }
    this.setState({ winner: 1 });
    // handleAddWinner(this.state);
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
                  handleClick={this.handleAdd}
                  label={(names[0], names[1])}
                  className="player"
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
