const router = require("express").Router();
const userRoutes = require("./userRoutes");
const cloudinaryRoutes = require("./cloudinaryRoutes");
const productRoutes = require("./products");
const purchaseRoutes = require("./purchases");

router.use("/user", userRoutes);
router.use("/cloud", cloudinaryRoutes);
router.use("/products", productRoutes);
router.use("/orders", purchaseRoutes);

module.exports = router;
