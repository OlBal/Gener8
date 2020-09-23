function shuffle(arr, pairChunks) {
  /* Takes array of names from Start and shuffles them. */

  arr.sort(() => 0.5 - Math.random());

  /* Empty array to place new pairs into. */

  let pairs = [];

  /* Loops over array based on length adding passed in number
  of chunks desired, .slice() to break them into the chunk then 
  pushes them to empty array.
  */

  for (let i = 0; i < arr.length; i += pairChunks) {
    const pairGroup = arr.slice(i, i + pairChunks);
    pairs.push(pairGroup);
  }
  return pairs;
}
export default shuffle;
