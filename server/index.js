const express = require('express');
const path = require('path');
const morgan = require('morgan');
const router = require('./routes');
require('../database');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/', router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Web server listening at http://localhost:${PORT}`);
});
