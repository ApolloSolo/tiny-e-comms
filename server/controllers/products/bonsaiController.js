const { Bonsai } = require("../../models/index");

const getBonsaiProducts = async (req, res) => {
  try {
    const bonsaiProducts = await Bonsai.find({}).select("-__v");
    res.status(200).json({ data: bonsaiProducts, message: "Success" });
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};

const addBonsaiProduct = async (req, res) => {
  try {
    const { name, price, url } = req.body;

    if (!name || !price) {
      res.status(400);
      throw new Error("Please enter all fields");
    }

    const newProduct = await Bonsai.create({
      name: name,
      price: price,
      imageUrls: url
    });

    if (!newProduct) {
      res.status(500);
      throw new Error("An issue occured while creating this product");
    }

    res.status(200).json(newProduct);
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};

module.exports = { getBonsaiProducts, addBonsaiProduct };
