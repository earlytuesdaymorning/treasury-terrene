const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    img: String,
    location: String,
    description: String,
});

const Map = mongoose.model("Map", mapSchema);

module.exports = Map;