const router = require('express').Router();
const purchaseRoutes = require('./purchases');

router.use('/purchases', purchaseRoutes);

module.exports = router;