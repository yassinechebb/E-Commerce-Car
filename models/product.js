const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
  name:String,
  img:String,
  description:String,
  price:String,
  category:String,
  details:Array,
  images:Array
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;