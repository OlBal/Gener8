import { connect } from "react-redux";
import Final from "./Final";

const mapStateToProps = ({ roundWinners, round }) => {
  return {
    roundWinners: roundWinners,
    round: round,
  };
};

export default connect(mapStateToProps)(Final);
