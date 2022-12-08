const router = require("express").Router();
const {getAllImages, uploadImage} = require("../../controllers/cloudinaryControllers");
const protected = require("../../middleware/authMiddleware");

router.get("/images", getAllImages);
router.post("/upload", protected, uploadImage)

module.exports = router;