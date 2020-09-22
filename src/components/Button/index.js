import { connect } from "react-redux";
import Button from "./Button";
import { reset } from "../../data/actions";

const mapDispatchToProps = (dispatch) => {
  console.log(1);
  return {
    handleReset: () => dispatch(reset()),
  };
};
export default connect(null, mapDispatchToProps)(Button);
