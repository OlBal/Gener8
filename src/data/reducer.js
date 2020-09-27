import initial from "./initial";
import pairs from "./functions/pairs";
import shuffle from "./functions/shuffle";

//Adds new player to global state array

const addPlayer = (state, { playerName }) => {
  return {
    ...state,
    players: [...state.players, playerName],
  };
};

//Uses Fischer algorithm to shuffle players

const playerShuffle = (state) => {
  return {
    ...state,
    players: shuffle([...state.players]),
  };
};

//Takes player list and creates an array of
// player pairs.

const playerPairs = (state) => {
  return {
    ...state,
    pairs: pairs([...state.players], 2),
  };
};

//Adds round winners to global array

const roundWinners = (state, { winners }) => {
  return {
    ...state,
    roundWinners: [...state.roundWinners, winners],
  };
};

const nextRound = (state) => {
  return {
    ...state,
    round: state.round + 1,
  };
};

const startTournament = (state) => {
  return {
    ...state,
    round: state.round + 1,
  };
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return addPlayer(state, action);
    case "START":
      return startTournament(playerPairs(playerShuffle(state, action)));
    case "NEXT_ROUND":
      return nextRound(roundWinners(state, action));
    case "CLEAR":
      return initial;
    default:
      return state;
  }
};

export default reducer;
