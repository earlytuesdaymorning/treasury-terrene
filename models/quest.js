const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questSchema = new Schema({
    name: String,
    location: String,
    description: String,
});

const Quest = mongoose.model("Quest", questSchema);

module.exports = Quest;