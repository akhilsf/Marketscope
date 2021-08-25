const mongoose = require('mongoose');

const StateCodes = new mongoose.Schema({
  state: String,
  postal: String,
  FIPS: Number,
});

const States = mongoose.model('Tracker', StateCodes);

module.exports = States;
