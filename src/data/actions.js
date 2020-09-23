export const addPlayer = (value) => {
  return {
    type: "ADD_PLAYER",
    ...value,
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};
