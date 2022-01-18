/** @format */

const { Schema, model } = require("mongoose");

const checkedInfoSchema = new Schema({
  restroomId: String,
  checked_date: String,
  checked_result: String,
});

module.exports = model("CheckedInfo", checkedInfoSchema);
