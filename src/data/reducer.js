import initial from "./initial";
import pairs from "./functions/pairs";
import shuffle from "./functions/shuffle";

//Adds new player to global state array

const addPlayer = (state, { playerName }) => {
  return {
    ...state,
    players: [...state.players, playerName],
  };
};

//Uses Fischer algorithm to shuffle players

const playerShuffle = (state) => {
  return {
    ...state,
    players: shuffle([...state.players]),
  };
};

//Takes player list and creates an array of
// player pairs.

const playerPairs = (state) => {
  return {
    ...state,
    pairs: pairs([...state.players], 2),
  };
};

//Starts tournament and add one to round state

const startTournament = (state) => {
  return {
    ...state,
    round: state.round + 1,
  };
};

//Takes the winners from the rounds, adds to the winners array and breaks them into paired array.

const roundWinners = (state, { winningPlayers }) => {
  let winningPairs = pairs(winningPlayers, 2);
  return {
    ...state,
    roundWinners: [...state.roundWinners, winningPairs],
    round: state.round + 1,
  };
};

const champion = (state, { champ }) => {
  return {
    ...state,
    champion: [...state.champion, champ],
    round: state.round + 1,
  };
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return addPlayer(state, action);
    case "START":
      return startTournament(playerPairs(playerShuffle(state, action)));
    case "NEXT_ROUND":
      return roundWinners(state, action);
    case "CHAMP":
      return champion(state, action);
    case "CLEAR":
      return initial;
    default:
      return state;
  }
};

export default reducer;
