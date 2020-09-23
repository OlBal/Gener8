import { connect } from "react-redux";
// import { addPlayer, clear } from "../../data/actions";
import Tournament from "./Tournament";
const mapStateToProps = (state) => {
  return {
    pairs: state.pairs,
  };
};
export default connect(mapStateToProps)(Tournament);
