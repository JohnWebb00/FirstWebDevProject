var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/*
var userSchema = new Schema({
    fullName : [{firstName: String, middleName: String, lastName: String}],
    phoneNumber : {type: Number, unique: true},
    PNR: {type : Number, unique: true},
    location: [{city : String, postNR: Number, address: String}],
    email: {type : String, required: true, unique: true}
});
*/

var userSchema = new Schema({
    name : {type:String},
    phoneNumber : {type: Number},
    location: {type: String},
    email: {type : String}
});


module.exports = mongoose.model('Users', userSchema);

