const { Schema, model } = require("mongoose");

const sportsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0.01
    },
    imageUrls: [
      {
        type: String
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

sportsSchema.virtual("price_cents").get(function() {
  const priceStr = this.price.toString();
  const doller_cent = priceStr.split(".");

  const convertedCents = parseInt(doller_cent[0] + doller_cent[1]);

  return convertedCents;
});

const Sport = model("Sport", sportsSchema);

module.exports = Sport;
