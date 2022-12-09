const { User, Purchase } = require("../models");

const getSuccessfullPurchase = async (req, res) => {
  try {
    const userId = req.params.id;
    //const user = await User.findById(userId).populate("purchases");
    const purchases = await Purchase.find({ user: userId })
      .sort({ createdAt: "desc" })
      .select("-__v -_id -user -updatedAt");
    const purchase = JSON.parse(purchases[0].itemsPurchased)
    res.json(purchase);
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { getSuccessfullPurchase };
