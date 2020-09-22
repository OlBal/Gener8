// export const savePlayers = ({ players }) => {
//   return {
//     players: players,
//     type: "SAVE_PLAYERS",
//   };
// };

export const addPlayers = (playerName) => {
  return {
    type: "ADD_PLAYERS",
    playerName: playerName,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
