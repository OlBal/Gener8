import { connect } from "react-redux";
import Players from "./Players";

const mapStateToProps = (state) => {
  return { players: state.players };
};

export default connect(mapStateToProps)(Players);
