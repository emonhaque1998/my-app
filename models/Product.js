const { Schema, default: mongoose } = require("mongoose");

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: { type: Number, required: true },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
