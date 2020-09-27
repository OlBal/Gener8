import { connect } from "react-redux";
import Final from "./Final";

const mapStateToProps = ({ roundWinners }) => {
  return {
    roundWinners: roundWinners,
  };
};

export default connect(mapStateToProps)(Final);
