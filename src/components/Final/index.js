import { connect } from "react-redux";
import Final from "./Final";

const mapStateToProps = ({ pairs }) => {
  return {
    pairs: pairs,
  };
};

export default connect(mapStateToProps)(Final);
