const router = require('express').Router();
const sportsRoutes = require('./sportsRoutes');
const officeRoutes = require("./officeRoutes")



router.use('/sports', sportsRoutes);
router.use('/office', officeRoutes);

module.exports = router;