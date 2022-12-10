const { User, Purchase } = require("../models");

const getSuccessfullPurchase = async (req, res) => {
  try {
    const userId = req.params.id;
    const purchases = await Purchase.find({ user: userId })
      .sort({ createdAt: "desc" })
      .select("-__v -_id -user -updatedAt");
    const purchase = JSON.parse(purchases[0].itemsPurchased);
    res.json(purchase);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const saveSuccessfulPurchase = async (req, res) => {
  try {
    const items = req.body;
    const boughtItmes = await Purchase.create({
      user: req.user._id,
      itemsPurchased: JSON.stringify(items)
    });
    await User.findByIdAndUpdate(req.user._id, {
      $push: { purchases: boughtItmes._id }
    });

    res.json(boughtItmes);
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { getSuccessfullPurchase, saveSuccessfulPurchase };
