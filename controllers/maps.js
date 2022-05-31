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

//show
router.get("/:id", (req, res) => {
    Map.findById(req.params.id, (err, foundMap) => {
        res.render("maps/show.ejs", {
            map: foundMap,
            tabTitle: `${foundMap.location}`,
        });
    });
});

//export
module.exports = router;