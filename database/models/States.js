const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  state: String,
  codes: {
    postal: String,
    FIPS: String,
  },
  counties: {
    name: String,
    FIPS: String,
  }
});

const FIPCodes = mongoose.model('Tracker', LocationSchema);

module.exports = FIPCodes;
