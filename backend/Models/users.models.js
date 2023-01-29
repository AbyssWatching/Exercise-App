//allows use of mongoose
const mongoose = require ('mongoose');

//Schema are the rules of creation for our DB, making a shorcut here
const Schema = mongoose.Schema;

//the schema and how it is built right now it's just a username and time stamp
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
}) 

//just making it so we can export, notice the string here
// that string is the name of schema more important is the name of the schema next to it
const User = mongoose.model("User", userSchema);

//exporting
module.exports = User;