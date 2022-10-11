var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    itemName: {type: String, required: true},
    rentPrice: {type: String, required: true},
    duration: {type: String, required: true},
    description: {type: String, required: true},
    approved: {type: Boolean, default: false},
    category: {type: String, required: true},
    Image:[{
        img1: String, required: true,
        img2: String, required: false,
        img3: String, required: false,
    }],
    itemAuthor: {type: String, required: true}
    });

var Item = mongoose.model('items', itemSchema);
module.exports = Item;