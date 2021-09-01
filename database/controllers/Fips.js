const Fips = require('../models/Fips');

module.exports = {
  get: (county) => Fips.findOne({ county }),
  add: (fips) => {
    const newFips = new Fips(fips);
    newFips.save(fips);
  },
};
