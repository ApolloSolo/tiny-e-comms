const router = require("express").Router();
const { sessionCheckout } = require("../controllers/stripeController");
const protected = require("../middleware/authMiddleware");

router.post("/checkout", protected, sessionCheckout);

module.exports = router;
