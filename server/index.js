const express = require('express');
const path = require('path');
const morgan = require('morgan');
const router = require('./routes');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server listening at http://localhost:${PORT}`);
});
