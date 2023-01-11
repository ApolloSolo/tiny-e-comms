const { Schema, model } = require("mongoose");

const bonsaiSchema = new Schema(
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

bonsaiSchema.virtual("price_cents").get(function() {
  const priceStr = this.price.toString();
  const doller_cent = priceStr.split(".");

  const convertedCents = parseInt(doller_cent[0] + doller_cent[1]);

  return convertedCents;
});

const Bonsai = model("Bonsai", bonsaiSchema);

module.exports = Bonsai;