import { connect } from "react-redux";
import { nextRound } from "../../data/actions";
import Matches from "./Matches";

const mapStateToProps = ({ pairs, round }) => {
  return {
    pairs: pairs,
    round: round,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleNextRound: (value) => dispatch(nextRound(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
