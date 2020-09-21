import initial from "./initial";

// const savePlayers = (state, { players }) => ({
//   ...state,
//   players: players,
// });

const addPlayers = (state, { players, playerName }) => {
  return {
    ...state,
    playerName: playerName,
    players: console.log([...players, playerName], 1),
  };
};

const resetReducer = (state) => {
  return console.log({ ...initial }, 2);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYERS":
      addPlayers({ state, action });
    case "RESET":
      return resetReducer(state);

    default:
      return state;
  }
};

export default reducer;
