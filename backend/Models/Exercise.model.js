const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//this Schema has multleple things it can be notice!! 
//username description duration date and timestamp
const exerciseSchema = new Schema({
    //notice how the req is on the same line!!
    username: {type: String, required: true},
    description: { type: String, required},
    duration: { type: Number, required: true},
    date: {type: Date, require: true},
}, {
    timestamps: true,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

//exporting!!
module.exports = Exercise;