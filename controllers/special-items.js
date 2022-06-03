const express = require("express");
const router = express.Router();
const Item = require("../models/special-item");

//routes
//index
router.get("/", (req, res) => {
    Item.find({}, (err, foundItems) => {
        res.render("special-items/index.ejs", {
            items: foundItems,
            tabTitle: "Special Items",
            typeURL: "special-items",
            type: "New Item",
            typeDelete: "Delete Item",
        });
    });
});

//new
router.get("/new", (req, res) => {
    res.render("special-items/new.ejs", {
        tabTitle: "New Item",
        typeURL: "special-items",
        type: "New Item",
        typeDelete: "Delete Item",
    });
});

//delete
router.get("/delete", (req, res) => {
    Item.find({}, (err, foundItems) => {
        res.render("special-items/delete.ejs", {
            items: foundItems,
            tabTitle: "Delete Special Items",
            typeURL: "special-items",
            type: "New Item",
            typeDelete: "Delete Item",
        });
    });
});

router.delete("/:id", (req, res) => {
    Item.findByIdAndRemove(req.params.id, () => {
        res.redirect("/special-items");
    });
});

//update
router.put("/:id", (req, res) => {
    if (req.body.atnmt === "on") {
        req.body.atnmt = true
    } else {
        req.body.atnmt = false
    }

    Item.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect("/special-items/" + req.params.id);
    });
});

//create
router.post("/", (req, res) => {
    if (req.body.atnmt === "on") {
        req.body.atnmt = true
    } else {
        req.body.atnmt = false
    }

    Item.create(req.body, (err, createdItem) => {
        res.redirect("/special-items");
    });
});

//edit
router.get("/:id/edit", (req, res) => {
    Item.findById(req.params.id, (err, foundItem) => {
        res.render("special-items/edit.ejs", {
            item: foundItem,
            tabTitle: `Edit ${foundItem.name}`,
            typeURL: "special-items",
            type: "New Item",
            typeDelete: "Delete Item",
        });
    });
});

//show
router.get("/:id", (req, res) => {
    Item.findById(req.params.id, (err, foundItem) => {
        res.render("special-items/show.ejs", {
            item: foundItem,
            tabTitle: `${foundItem.name}`,
            typeURL: "special-items",
            type: "New Item",
            typeDelete: "Delete Item",
        });
    });
});

//export
module.exports = router;