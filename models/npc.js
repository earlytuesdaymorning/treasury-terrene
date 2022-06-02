const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const npcSchema = new Schema({
    name: String,
    race: String,
    gender: String,
    almt: String,
    age: Number,
    str: String,
    dex: String,
    con: String,
    int: String,
    wis: String,
    cha: String,
    lang: String,
    personality: String,
    hook: String,
    img: String,
});

const NPC = mongoose.model("NPC", npcSchema);

module.exports = NPC;