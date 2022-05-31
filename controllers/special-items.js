const express = require("express");
const router = express.Router();
const SpecialItem = require("../models/special-item");

//routes
//index
router.get("/", (req, res) => {
    SpecialItem.find({}, (err, foundSpecialItems) => {
        res.render("special-items/index.ejs", {
            specialitems: foundSpecialItems,
            tabTitle: "Special Items",
        });
    });
});

//new
router.get("/new", (req, res) => {
    res.render("special-items/new.ejs", {
        tabTitle: "New Item",
    });
});

//delete
router.delete("/:id", (req, res) => {
    SpecialItem.findByIdAndRemove(req.params.id, () => {
        res.redirect("/special-items");
    });
});

//update
router.put("/:id", (req, res) => {
    SpecialItem.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect("/special-items");
    });
});

//create
router.post("/", (req, res) => {
    SpecialItem.create(req.body, (err, createdSpecialItem) => {
        res.redirect("/special-items");
    });
});

//edit
router.get("/:id/edit", (req, res) => {
    SpecialItem.findById(req.params.id, (err, foundSpecialItem) => {
        res.render("special-items/edit.ejs", {
            specialItem: foundSpecialItem,
            tabTitle: `Edit ${foundSpecialItem.name}`,
        });
    });
});

//show
router.get("/:id", (req, res) => {
    SpecialItem.findById(req.params.id, (err, foundSpecialItem) => {
        res.render("special-items/show.ejs", {
            specialItem: foundSpecialItem,
            tabTitle: `${foundSpecialItem.name}`,
        });
    });
});

//export
module.exports = router;