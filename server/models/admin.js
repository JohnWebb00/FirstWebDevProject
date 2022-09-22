var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    adminName : {type: String},
    adminUsername : {type: String, required: true, unique: true},
    adminPass : {type: String, required: true}
});


module.exports = mongoose.model('Admins', adminSchema);