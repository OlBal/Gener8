import { connect } from "react-redux";
import Start from "./Start";
import { savePlayers, addPlayers, reset } from "../../data/actions";

const mapStateToProps = ({ playerName, players }) => {
  return {
    playerName,
    players,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSave: (players) => dispatch(savePlayers(players)),
    handleAdd: (playerName) => dispatch(addPlayers(playerName)),
    handleReset: () => dispatch(reset()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Start);
