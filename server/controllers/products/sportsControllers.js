const { Sport } = require("../../models/index");

const getSportsProducts = async (req, res) => {
  try {
    const sportsProducts = await Sport.find({}).select("-__v -password");
    res.status(200).json({ data: sportsProducts, message: "Success" });
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};

const addSportsProduct = async (req, res) => {
  try {
    const { name, price, url } = req.body;

    if (!name || !price) {
      res.status(400);
      throw new Error("Please enter all fields");
    }

    const newProduct = await Sport.create({name: name, price: price, imageUrls: url});

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

module.exports = {
  getSportsProducts,
  addSportsProduct
};
