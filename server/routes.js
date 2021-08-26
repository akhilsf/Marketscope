const router = require('express').Router();
const externalAPIs = require('./externalAPIs');

router.get('/census/:county&:state', externalAPIs.getCounty);

module.exports = router;
