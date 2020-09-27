import { connect } from "react-redux";
import { nextRound } from "../../data/actions";
import Matches from "./Matches";

const mapStateToProps = ({ pairs }) => {
  return {
    pairs: pairs,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleNextRound: (value) => dispatch(nextRound(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
