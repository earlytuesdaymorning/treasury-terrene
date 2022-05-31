const express = require("express");
const router = express.Router();
const Monster = require("../models/monster");

//routes
//index
router.get("/", (req, res) => {
    Monster.find({}, (err, foundMonsters) => {
        res.render("monsters/index.ejs", {
            monsters: foundMonsters,
            tabTitle: "Monsters",
        });
    });
});

//new
router.get("/new", (req, res) => {
    res.render("monsters/new.ejs", {
        tabTitle: "New Monster",
    });
});

//delete
router.delete("/:id", (req, res) => {
    Monster.findByIdAndRemove(req.params.id, () => {
        res.redirect("/monsters");
    });
});

//update
router.put("/:id", (req, res) => {
    Monster.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect("/monsters");
    });
});

//create
router.post("/", (req, res) => {
    Monster.create(req.body, (err, createdMap) => {
        res.redirect("/monsters");
    });
});

//edit
router.get("/:id/edit", (req, res) => {
    Monster.findById(req.params.id, (err, foundMonster) => {
        res.render("maps/edit.ejs", {
            monster: foundMonster,
            tabTitle: `Edit ${foundMonster.name}`,
        });
    });
});

//show
router.get("/:id", (req, res) => {
    Monster.findById(req.params.id, (err, foundMonster) => {
        res.render("monsters/show.ejs", {
            monster: foundMonster,
            tabTitle: `${foundMonster.name}`,
        });
    });
});

//export
module.exports = router;