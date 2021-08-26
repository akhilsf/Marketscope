const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
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

const SavedLocation = mongoose.model('Tracker', LocationSchema);

module.exports = SavedLocation;
