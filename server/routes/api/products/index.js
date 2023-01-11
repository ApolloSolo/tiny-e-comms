const router = require("express").Router();
const sportsRoutes = require("./sportsRoutes");
const officeRoutes = require("./officeRoutes");
const bonsaiRoutes = require("./bonsai");

router.use("/sports", sportsRoutes);
router.use("/office", officeRoutes);
router.use("/bonsai", bonsaiRoutes);

module.exports = router;
