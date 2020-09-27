import { connect } from "react-redux";
import Semi from "./Semi";

const mapStateToProps = ({ pairs }) => {
  return {
    pairs: pairs,
  };
};

export default connect(mapStateToProps)(Semi);
