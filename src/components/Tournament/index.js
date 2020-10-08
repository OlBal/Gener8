import { connect } from "react-redux";
import { clear } from "../../data/actions";
import Tournament from "./Tournament";
const mapStateToProps = ({ round }) => {
  return {
    round: round,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleClear: (value) => dispatch(clear(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
