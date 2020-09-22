import { connect } from "react-redux";
import Button from "./Button";
import { reset } from "../../index";

const mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => dispatch(reset()),
  };
};
export default connect(null, mapDispatchToProps)(Button);
