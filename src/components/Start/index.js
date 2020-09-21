import { connect } from "react-redux";
import Start from "./Start";

const mapStateToProps = ({ playerName, players }) => {
  return {
    playerName,
    players,
  };
};

export default connect(mapStateToProps)(Start);
