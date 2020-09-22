import { connect } from "react-redux";
import PlayerList from "./PlayerList";
const mapStateToProps = ({ state }) => {
  console.log(state);
  console.log(1);

  return;

  state;
};

export default connect(mapStateToProps)(PlayerList);
