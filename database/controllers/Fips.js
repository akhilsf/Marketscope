const Fips = require('../models/Fips');

module.exports = {
  get: (req, res) => {
    Fips.find()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  add: (fips) => {
    const newFips = new Fips(fips);
    newFips.save(fips);
  },
};
