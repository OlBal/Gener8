// export const savePlayers = ({ players }) => {
//   return {
//     players: players,
//     type: "SAVE_PLAYERS",
//   };
// };

export const addPlayers = (players, playerName) => {
  return {
    type: "ADD_PLAYER",
    players: console.log([...players, playerName], 4),
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
