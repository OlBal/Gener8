import { connect } from "react-redux";
import Players from "./Players";

const mapStateToProps = ({ players }) => {
  return { players: players };
};

export default connect(mapStateToProps)(Players);
