import { connect } from "react-redux";
import { roundWinners } from "../../data/actions";
import Matches from "./Matches";

const mapStateToProps = ({ pairs }) => {
  return {
    pairs: pairs,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleAddWinners: (value) => dispatch(roundWinners(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
