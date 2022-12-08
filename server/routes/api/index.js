const router = require("express").Router();
const userRoutes = require("./userRoutes");
const cloudinaryRoutes = require("./cloudinaryRoutes");
const productRoutes = require("./products");

router.use("/user", userRoutes);
router.use("/cloud", cloudinaryRoutes);
router.use("/products", productRoutes);

module.exports = router;
