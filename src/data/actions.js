export const addPlayer = (value) => {
  return {
    type: "ADD_PLAYER",
    ...value,
  };
};

export const backButton = (value) => {
  return {
    type: "BACK",
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
