const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
  city: String,
});

const Tracker = mongoose.model('Tracker', trackerSchema);

module.exports = Tracker;
