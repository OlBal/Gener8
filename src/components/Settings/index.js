import { connect } from "react-redux";
import { addPlayer, clear } from "../../data/actions";
import Settings from "./Settings";
const mapStateToProps = (state) => {
  return {
    players: state.players,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleAdd: (value) => dispatch(addPlayer(value)),
  handleClear: (value) => dispatch(clear(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
