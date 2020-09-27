import { connect } from "react-redux";
import { nextRound } from "../../data/actions";
import Semi from "./Semi";

const mapStateToProps = ({ roundWinners }) => {
  return {
    roundWinners: roundWinners,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleNextRound: (value) => dispatch(nextRound(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Semi);
