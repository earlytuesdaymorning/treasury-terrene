//dependencies
const express = require("express");
const router = express.Router();
const Map = require("../models/map");

//routes
//index
router.get("/", (req, res) => {
    Map.find({}, (err, foundMaps) => {
        res.render("maps/index.ejs", {
            maps: foundMaps,
            tabTitle: "Maps",
        });
    });
});

//n

//d

//u

//c

//e

//s

//export
module.exports = router;