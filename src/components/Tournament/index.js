import { connect } from "react-redux";
import { backButton } from "../../data/actions";
import Tournament from "./Tournament";
const mapStateToProps = (state) => {
  return {
    pairs: state.pairs,
    view: console.log(state.view),
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleBackButton: (value) => dispatch(backButton(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
