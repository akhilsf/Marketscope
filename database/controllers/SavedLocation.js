const SavedLocation = require('../models/SavedLocation');

module.exports = {
  getAll: (req, res) => {
    SavedLocation.find()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  add: (req, res) => {
    const newLocation = new SavedLocation(req.body);

    console.log(newLocation);
    newLocation.save(req.body)
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((error) => {
        res.status(200).send(error);
      });
  },
};
