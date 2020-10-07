import { connect } from "react-redux";
import { nextRound, clear } from "../../data/actions";
import Matches from "./Matches";

const mapStateToProps = ({ pairs, round, roundWinners }) => {
  return {
    pairs: pairs,
    round: round,
    roundWinners: roundWinners,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleNextRound: (value) => dispatch(nextRound(value)),
  handleClear: (value) => dispatch(clear(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
