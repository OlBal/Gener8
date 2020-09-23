import initial from "./initial";

//Adds new player to global state array

const addPlayer = (state, { playerName }) => {
  return {
    ...state,
    players: [...state.players, playerName],
  };
};

// const start = () => {
//   return {
//     ...state,
//   };
// };

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return addPlayer(state, action);
    case "CLEAR":
      return initial;
    default:
      return state;
  }
};

export default reducer;
