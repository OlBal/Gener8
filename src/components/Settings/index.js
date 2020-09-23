import { connect } from "react-redux";
import { addPlayer, clear, start } from "../../data/actions";
import Settings from "./Settings";
const mapStateToProps = (state) => {
  return {
    players: state.players,
    round: state.round,
    pairs: state.pairs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleAdd: (value) => dispatch(addPlayer(value)),
  handleClear: (value) => dispatch(clear(value)),
  handleStart: (value) => dispatch(start(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
