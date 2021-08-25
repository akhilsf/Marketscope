const router = require('express').Router();
const externalAPIs = require('./externalAPIs');

router.get('/census', externalAPIs.populationRetrieval);

module.exports = router;
