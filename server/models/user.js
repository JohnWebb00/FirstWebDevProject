var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    fullName : {type: String},
    userName : {type: String, required: true, unique: true},
    userPass : {type: String, required: true},
    phoneNumber : {type: String},
    location:
    {
        city: String,
        postNr: String,
        streetAddress: String
    },
    email: {type : String, required : true}
});


module.exports = mongoose.model('Users', userSchema);

