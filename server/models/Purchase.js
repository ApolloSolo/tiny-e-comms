const { Schema, model } = require("mongoose");

const purchaseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    itemsPurchased: {
      type: String
    }
  },
  { timestamps: true },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

const Purchase = model("Purchase", purchaseSchema);

module.exports = Purchase;


/* 
[
  {
    _id: '63933f9f8530522a84d663da',
    name: 'Baseball',
    price: 2.25,
    imageUrls: [
      'https://res.cloudinary.com/dilgi4bff/image/upload/v1670594453/react_demo/qzykjm4bhnapzzunjwib.jpg'
    ],
    price_cents: 225
  },
  {
    _id: '6393415b8530522a84d663e8',
    name: 'Chair',
    price: 59.95,
    imageUrls: [
      'https://res.cloudinary.com/dilgi4bff/image/upload/v1670594893/react_demo/hpfxsgvnoumwgqkejq0x.jpg'
    ],
    price_cents: 5995
  }
]

*/