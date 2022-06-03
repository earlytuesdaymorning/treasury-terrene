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
            typeURL: "maps",
            type: "New Map",
        });
    });
});

//new
router.get("/new", (req, res) => {
    res.render("maps/new.ejs", {
        tabTitle: "New Map",
        typeURL: "maps",
        type: "New Map",
    });
});

//delete
router.get("/delete", (req, res) => {
    Map.find({}, (err, foundMaps) => {
        res.render("maps/delete.ejs", {
            maps: foundMaps,
            tabTitle: "Delete Maps",
            typeURL: "maps",
            type: "New Map",
        });
    });
});

router.delete("/:id", (req, res) => {
    Map.findByIdAndDelete(req.params.id, () => {
        res.redirect("/maps");
    });
});

//update
router.put("/:id", (req, res) => {
    Map.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect("/maps/");
    });
});

//create
router.post("/", (req, res) => {
    Map.create(req.body, (err, createdMap) => {
        res.redirect("/maps");
    });
});

//edit
router.get("/:id/edit", (req, res) => {
    Map.findById(req.params.id, (err, foundMap) => {
        res.render("maps/edit.ejs", {
            map: foundMap,
            tabTitle: `Edit Map of ${foundMap.location}`,
            typeURL: "maps",
            type: "New Map",
        });
    });
});

//show
router.get("/:id", (req, res) => {
    Map.findById(req.params.id, (err, foundMap) => {
        res.render("maps/show.ejs", {
            map: foundMap,
            tabTitle: `Map of ${foundMap.location}`,
            typeURL: "maps",
            type: "New Map",
        });
    });
});

//export
module.exports = router;