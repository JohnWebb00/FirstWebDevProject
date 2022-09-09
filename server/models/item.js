var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema({
itemName: {type: String, required: true},
rentPrice: {type: String, required: true}, //SEK
duration: {type: String, required: true},
//review: [{rating: Double, comment: String, }]
//Add timestamp

})

var Item = mongoose.model('items', itemSchema);
module.exports = Item;