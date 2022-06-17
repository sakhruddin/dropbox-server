const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
  nameCategories: String
});

const Categories = mongoose.model('Categories', categoriesSchema);
module.exports = Categories;