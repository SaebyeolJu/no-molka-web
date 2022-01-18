/** @format */

const { Schema, model } = require("mongoose");

const restroomSchema = new Schema({
  type: String,
  name: String,
  address: String,
  unisex: String,
  management_agency: String,
  management_phone: String,
  checked: String,
  crime: String,
});

module.exports = model("Restroom", restroomSchema);
