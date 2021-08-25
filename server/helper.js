const sorter = (recentYearPop, priorYearPop) => {
  const comparison = [];
  recentYearPop.forEach((state) => {
    const stateName = state[0];
    console.log(stateName);
    priorYearPop.every((stateComp) => {
      if (stateName === stateComp[0]) {
        comparison.push((stateName[0] / stateComp[0]) - 1);
        return false;
      }
      return true;
    });
  });

  return comparison.sort((a, b) => b - a);
};

module.exports = sorter;
