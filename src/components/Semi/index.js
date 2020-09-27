import { connect } from "react-redux";
import { nextRound } from "../../data/actions";
import Semi from "./Semi";

const mapStateToProps = ({ roundWinners, round }) => {
  return {
    roundWinners: roundWinners,
    round: round,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleNextRound: (value) => dispatch(nextRound(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Semi);
