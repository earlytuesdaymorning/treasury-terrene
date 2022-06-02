const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    type: String,
    rarity: String,
    atnmt: Boolean,
    description: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;