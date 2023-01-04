const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const {User, Purchase} = require("../models");

const sessionCheckout = async (req, res) => {
  try {
    console.log(req.user)
    const items = req.body;
    console.log(items)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map(item => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name
            },
            unit_amount: item.price_cents
          },
          quantity: 1
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`
    });

    
    res.json({ url: session.url });
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};

module.exports = { sessionCheckout };
