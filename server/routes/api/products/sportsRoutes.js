const router = require("express").Router();
const {
  getSportsProducts,
  addSportsProduct
} = require("../../../controllers/products/sportsControllers");
const protected = require("../../../middleware/authMiddleware");

router.get("/", getSportsProducts);
router.post("/add", addSportsProduct)

module.exports = router;
