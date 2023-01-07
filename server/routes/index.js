const router = require('express').Router();
const apiRoutes = require('./api');
const paymentRoute = require("./payment");

router.use('/api', apiRoutes);
router.use('/process', paymentRoute)


module.exports = router