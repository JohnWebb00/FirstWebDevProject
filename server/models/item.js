var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    itemName: {type: String, required: true},
    rentPrice: {type: String, required: true},
    duration: {type: String, required: true},
    description: {type: String, required: true},
    approved: {type: Boolean, default: false},
    category: {type: String, required: true},
    itemAuthor: {type: Schema.Types.ObjectId, ref: 'User'}
    });

var Item = mongoose.model('items', itemSchema);
module.exports = Item;