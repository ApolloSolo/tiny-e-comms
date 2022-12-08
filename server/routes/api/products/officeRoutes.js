const router = require("express").Router();
const {
    getOfficeProducts,
    addOfficesProduct
} = require("../../../controllers/products/officeController");
const protected = require("../../../middleware/authMiddleware");

router.get("/", getOfficeProducts);
router.post("/add", addOfficesProduct)

module.exports = router;
