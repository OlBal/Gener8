import { connect } from "react-redux";
import Start from "./Start";
import { addPlayers, reset } from "../../data/actions";

const mapStateToProps = (state) => {
  console.log();
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleSave: (players) => dispatch(savePlayers(players)),
    handleAdd: (playerName) => dispatch(addPlayers(playerName)),
    handleReset: () => dispatch(reset()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Start);
