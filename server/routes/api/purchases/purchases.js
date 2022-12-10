const router = require("express").Router();
const {
  getSuccessfullPurchase, saveSuccessfulPurchase
} = require("../../../controllers/purchaseControllers");
const protected = require("../../../middleware/authMiddleware");

router.post("/save", protected, saveSuccessfulPurchase)
router.get("/success/:id", getSuccessfullPurchase);

module.exports = router;
