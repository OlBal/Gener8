import { connect } from "react-redux";
import { clear } from "../../data/actions";
import Tournament from "./Tournament";
const mapStateToProps = ({ pairs, round, roundWinners }) => {
  return {
    pairs: pairs,
    round: round,
    roundWinners: roundWinners,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleClear: (value) => dispatch(clear(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
