var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    itemName: {type: String, required: true},
    rentPrice: {type: String, required: true}, //SEK
    duration: {type: String, required: true},
    description: {type: String, required: true},
    approved: {type: Boolean, default: false},
    category: {type: String, required: true}
   // review: [{ type: Schema.Types.ObjectId, ref: 'review' }],
    });

var Item = mongoose.model('items', itemSchema);
module.exports = Item;