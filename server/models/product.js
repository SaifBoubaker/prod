const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
