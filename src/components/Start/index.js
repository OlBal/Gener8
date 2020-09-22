import { connect } from "react-redux";
// import { addName } from "../../../src/index";
import Start from "./Start";
const mapStateToProps = (state) => {
  return {
    players: state.players,
    playerName: state.playerName,
    pairs: state.pairs,
  };
};

export default connect(mapStateToProps)(Start);
