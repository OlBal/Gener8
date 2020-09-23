import { connect } from "react-redux";
import { addPlayer, clear, startTournament } from "../../data/actions";
import Settings from "./Settings";
const mapStateToProps = (state) => {
  return {
    players: state.players,
    pairs: state.pairs,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleAdd: (value) => dispatch(addPlayer(value)),
  handleClear: (value) => dispatch(clear(value)),
  handleStart: (value) => dispatch(startTournament(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
