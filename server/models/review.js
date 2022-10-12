var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    item_id: { type: Schema.Types.ObjectId, ref: 'Item' },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, min: 5, max: 15 , required: true },
    comment: { type: String, min: 20, max: 100},
    rating: { type: Number, min: 1, max: 5, required: true },
});

module.exports = mongoose.model('Reviews', reviewSchema);

