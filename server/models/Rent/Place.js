/** @format */

// Rent service

const { Schema, model } = require("mongoose");

const placeSchema = new Schema({
  cityId: String,
  name: String,
  phone: String,
  address: String,
  pos: [String],
});

module.exports = model("Place", placeSchema);
