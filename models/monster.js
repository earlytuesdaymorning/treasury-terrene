const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
    name: String,
    type: String,
    almt: String,
    armcls: String,
    hitpts: String,
    speed: Number,
    stats:[{
        str: String,
        dex: String,
        con: String,
        int: String,
        wis: String,
        cha: String,
    }],
    skills: String,
    dmgresist: String,
    dmgweak: String,
    lang: String,
    actions: String,
    description: String,

});

const Monster = mongoose.model("Monster", monsterSchema);

module.exports = Monster;