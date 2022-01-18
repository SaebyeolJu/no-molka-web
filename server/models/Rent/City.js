// model for rent service
const {Schema, model} = require('mongoose');

const citySchema = new Schema({
    name : String,
    item : String,
    method : String,
    condition : String,
    period : String
});

module.exports = model('City', citySchema);