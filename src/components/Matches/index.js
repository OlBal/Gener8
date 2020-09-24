import { connect } from "react-redux";
import Matches from "./Matches";

const mapStateToProps = ({ pairs }) => {
  return {
    pairs: pairs,
  };
};

export default connect(mapStateToProps)(Matches);
