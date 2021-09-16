const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Slide = new Schema({
    name: String,
    Msq1: String,
    Msq2: String,
    Msq3: String,
    Msq4: String,
    url: String,
    imgUrl: String,
    LinkText: String
});

module.exports = mongoose.model("Slide", Slide);