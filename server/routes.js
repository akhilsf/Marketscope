const router = require('express').Router();
const externalAPIs = require('./externalAPIs');
const controllers = require('../database/controllers/SavedLocation');

router.get('/census/:county&:state', externalAPIs.getCounty);
router.get('/savedlocations', controllers.getAll);
router.post('/savedlocations', controllers.add);

module.exports = router;
