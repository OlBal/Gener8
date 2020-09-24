const pairs = (arr, pairChunks) => {
  let pairs = [];

  for (let i = 0; i < arr.length; i += pairChunks) {
    const pairGroup = arr.slice(i, i + pairChunks);
    pairs.push(pairGroup);
  }
  return pairs;
};
export default pairs;
