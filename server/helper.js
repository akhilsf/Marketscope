const sorter = (recentYearPop, priorYearPop) => {
  const comparison = [];
  recentYearPop.forEach((city) => {
    const placeId = city[2];
    priorYearPop.every((cityComp) => {
      if (placeId === cityComp[2]) {
        comparison.push((city[0] / cityComp[0]) - 1);
        return false;
      }
      return true;
    });
  });

  return comparison.sort((a, b) => b - a);
};

module.exports = sorter;
