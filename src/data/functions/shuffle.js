// Using the Fisher Yates shuffle algorithm in a while loop, in order to mix up the player input list before pairing the players.
//Originally this was done using a sort function but didn't randomise well enough.

const shuffle = (arr) => {
  var m = arr.length,
    temp,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    temp = arr[m];
    arr[m] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

export default shuffle;
