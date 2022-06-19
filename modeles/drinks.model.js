const mongoose = require("mongoose");

const drinksSchema = mongoose.Schema({
  name: String,
  price: Number,
  inStock: String,
  inCaffeine: String,
  size: Number,
  description: String
});


const Drinks = mongoose.model('Drinks', drinksSchema);
module.exports = Drinks;