const { Office } = require("../../models/index");

const getOfficeProducts = async (req, res) => {
  try {
    const sportsProducts = await Office.find({}).select("-__v -password");
    res.status(200).json({ sport: sportsProducts, message: "Success" });
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};

const addOfficesProduct = async (req, res) => {
  try {
    const { name, price, url } = req.body;

    if (!name || !price) {
      res.status(400);
      throw new Error("Please enter all fields");
    }

    const newProduct = await Office.create({
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

module.exports = {
  getOfficeProducts,
  addOfficesProduct
};
