// import initial from "./initial";

// const savePlayers = (state, { players }) => ({
//   ...state,
//   players: players,
// });

const addPlayers = (state, { playerName }) => {
  return {
    ...state,
    playerName: [...state.playerName, playerName],
  };
};

// const resetReducer = (state) => {
//   return console.log({ ...initial }, 2);
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYERS":
      addPlayers({ state, action });
    // case "RESET":
    //   return resetReducer(state);

    default:
      return state;
  }
};

export default reducer;
