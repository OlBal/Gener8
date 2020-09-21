import initial from "./initial";

const savePlayers = (state, { players }) => ({
  ...state,
  players: players,
});

const addPlayers = (state, { players, playerName }) => {
  return {
    ...state,
    playerName: playerName,
    players: [...players, playerName],
  };
};

const resetReducer = (state) => {
  return { ...initial };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_PLAYERS":
      savePlayers({ state, action });
    case "ADD_PLAYERS":
      addPlayers({ state, action });
    case "RESET":
      return resetReducer(state);

    default:
      return state;
  }
};

export default reducer;
