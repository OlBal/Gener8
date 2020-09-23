import shuffle from "./functions/shuffle";
import initial from "./initial";

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
    pairs: shuffle([...state.players], 2),
  };
};

const backButton = (state) => {
  return {
    ...state,
    view: true,
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
    case "START":
      return startTournament(playerPairs(state, action));
    case "BACK":
      return backButton(state, action);
    case "CLEAR":
      return initial;
    default:
      return state;
  }
};

export default reducer;
