const mongoose = require('mongoose');

const mongoURI = ('mongodb://localhost:27017/marketscope');

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(() => console.log(`Connected to: ${mongoURI}`))
  .catch((err) => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = db;
