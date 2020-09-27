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

//Shuffles players array and outputs 4 pairs of players

const playerPairs = (state) => {
  return {
    ...state,
    pairs: pairs([...state.players], 2),
  };
};

const playerShuffle = (state) => {
  return {
    ...state,
    players: shuffle([...state.players]),
  };
};

const roundWinners = (state, { winners }) => {
  return {
    ...state,
    roundWinners: [...state.roundWinners, winners],
  };
};

const nextRound = (state, { winners }) => {
  return {
    ...state,
    roundWinners: [...state.roundWinners, winners],
  };
};

const startTournament = (state) => {
  return {
    ...state,
    view: false,
  };
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return addPlayer(state, action);
    case "NEXT_ROUND":
      return roundWinners(state, action);
    case "START":
      return startTournament(playerPairs(playerShuffle(state, action)));
    case "CLEAR":
      return initial;
    default:
      return state;
  }
};

export default reducer;
