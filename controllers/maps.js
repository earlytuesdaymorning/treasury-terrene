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

//new
router.get("/new", (req, res) => {
    res.render("maps/new.ejs", {
        tabTitle: "New Map",
    });
});

//delete
router.delete("/:id", (req, res) => {
    Map.findByIdAndRemove(req.params.id, () => {
        res.redirect("/maps");
    });
});

//u

//create
router.post("/", (req, res) => {
    Map.create(req.body, (err, createdMap) => {
        res.redirect("/maps");
    });
});

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