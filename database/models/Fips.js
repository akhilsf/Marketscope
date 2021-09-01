const mongoose = require('mongoose');

const FipsSchema = new mongoose.Schema({
  county: {
    type: String,
    required: true,
    unique: true,
    dropDud: true,
  },
  popGrowth: String,
  jobGrowth: String,
  householdIncome: String,
  crimeRate: String,
}, { strict: true });

const Fips = mongoose.model('Fips', FipsSchema);

module.exports = Fips;
