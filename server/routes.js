const router = require('express').Router();
const externalAPIs = require('./externalAPIs');

router.get('/census', externalAPIs.getAll);
router.get('/census/:county&:state', externalAPIs.getCounty);

module.exports = router;
