import { connect } from "react-redux";
import { savePlayers, addPlayers, reset } from "../../data/actions";
import Button from "./Button";
const mapDispatchToProps = (dispatch) => {
  return {
    handleSave: ({ players }) => dispatch(savePlayers(players)),
    handleAdd: ({ playerName }) => dispatch(addPlayers(playerName)),
    handleReset: () => dispatch(reset()),
  };
};
export default connect(null, mapDispatchToProps)(Button);
