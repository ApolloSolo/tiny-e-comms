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

/* 
{
  purchases: [],
  _id: new ObjectId("6391ed496db5f75d5a210080"),
  username: 'AppSolo',
  email: 'appsolo.tech@gmail.com',
  photos: 'https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg',
  createdAt: 2022-12-08T13:57:29.230Z,
  updatedAt: 2022-12-08T13:57:29.230Z,
  __v: 0
}

*/
