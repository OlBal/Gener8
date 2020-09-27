import { connect } from "react-redux";
import { clear } from "../../data/actions";
import Tournament from "./Tournament";
const mapStateToProps = ({ pairs, round }) => {
  return {
    pairs: pairs,
    round: round,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleClear: (value) => dispatch(clear(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
