import { connect } from "react-redux";
import { roundWinners, clear, champion } from "../../data/actions";
import Matches from "./Matches";

const mapStateToProps = ({ pairs, round, roundWinners, champion }) => {
  return {
    pairs: pairs,
    round: round,
    roundWinners: roundWinners,
    champion: champion,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleNextRound: (value) => dispatch(roundWinners(value)),
  handleChampion: (value) => dispatch(champion(value)),
  handleClear: (value) => dispatch(clear(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
