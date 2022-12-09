const router = require("express").Router();
const {
  getSuccessfullPurchase
} = require("../../../controllers/purchaseControllers");
const protected = require("../../../middleware/authMiddleware");

router.get("/success/:id", getSuccessfullPurchase);

module.exports = router;
