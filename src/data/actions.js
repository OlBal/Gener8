export const addPlayer = (value) => {
  return {
    type: "ADD_PLAYER",
    ...value,
  };
};

export const nextRound = (value) => {
  return {
    type: "NEXT_ROUND",
    ...value,
  };
};

export const startTournament = (value) => {
  return {
    type: "START",
    ...value,
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};
