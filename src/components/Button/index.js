import { connect } from "react-redux";
import Button from "./Button";
import { clear } from "../../data/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleClear: (value) => dispatch(clear(value)),
  };
};
export default connect(null, mapDispatchToProps)(Button);
