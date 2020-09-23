import shuffle from "./functions/pairs";
import initial from "./initial";

//Adds new player to global state array

const addPlayer = (state, { playerName }) => {
  return {
    ...state,
    players: [...state.players, playerName],
  };
};

const start = (state, { round }) => {
  console.log(state.pairs);

  return {
    ...state,

    round: round + 1,
    pairs: shuffle([...state.players], 2),
  };
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return addPlayer(state, action);
    case "START":
      return start(state, action);
    case "CLEAR":
      return initial;
    default:
      return state;
  }
};

export default reducer;
