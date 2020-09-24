import { connect } from "react-redux";
import { clear } from "../../data/actions";
import Tournament from "./Tournament";
const mapStateToProps = (state) => {
  return {
    pairs: state.pairs,
    view: console.log(state.view),
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleClear: (value) => dispatch(clear(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
