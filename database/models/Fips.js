const mongoose = require('mongoose');

const FipsSchema = new mongoose.Schema({
  county: {
    type: String,
    required: true,
    unique: true,
    dropDud: true,
  },
  fips: String,
}, { strict: true });

const Fips = mongoose.model('Fips', FipsSchema);

module.exports = Fips;
