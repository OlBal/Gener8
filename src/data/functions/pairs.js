//A function which outputs the pairs into smaller chunks of 2. It made more sense to break it out as a separate function in order not to confuse it with what is happening in the reducer functions.

const pairs = (arr, pairChunks) => {
  let pairs = [];

  for (let i = 0; i < arr.length; i += pairChunks) {
    const pairGroup = arr.slice(i, i + pairChunks);
    pairs.push(pairGroup);
  }
  return pairs;
};
export default pairs;
