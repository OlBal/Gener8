import { connect } from "react-redux";
import PlayerList from "./PlayerList";

const mapStateToProps = ({ playerName, players }) => ({
  playerName,
  players,
});

export default connect(mapStateToProps)(PlayerList);
