import { connect } from "react-redux";
import PlayerList from "./PlayerList";

const mapStateToProps = (players) => {
  console.log(players);
};

export default connect(mapStateToProps)(PlayerList);
