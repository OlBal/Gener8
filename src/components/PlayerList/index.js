import { connect } from "react-redux";
import PlayerList from "./PlayerList";
const mapStateToProps = (state) => {
  return { players: state.players };
};

export default connect(mapStateToProps)(PlayerList);
