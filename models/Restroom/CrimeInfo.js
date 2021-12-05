const { Schema, model } = require("mongoose");

const crimeInfoSchema = new Schema({
  restroom_id: String,
  crime_date: String,
  crime_camera: String,
});

module.exports = model("CrimeInfo", crimeInfoSchema);
