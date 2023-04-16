exports.roundNumber = (number) => {
  return Math.round((number * 0.9 + Number.EPSILON) * 100) / 100;
};
