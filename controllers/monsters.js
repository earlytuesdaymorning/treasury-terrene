const express = require("express");
const router = express.Router();
const Monster = require("../models/monster");

//routes
//index
// router.get("/", (req, res) => {
//     res.render("monsters/index.ejs", {
//         allMonsters: Monster,
//         tabTitle: "Monsters",
//     });
// });

router.get("/", (req, res) => {
    Monster.find({}, (err, foundMonsters) => {
        res.render("monsters/index.ejs", {
            monsters: foundMonsters,
            tabTitle: "Monsters",
            typeURL: "monsters",
            type: "New Monster",
            typeDelete: "Delete Monster",
        });
    });
});

//new
router.get("/new", (req, res) => {
    res.render("monsters/new.ejs", {
        tabTitle: "New Monster",
        typeURL: "monsters",
        type: "New Monster",
        typeDelete: "Delete Monster",
    });
});

//delete
router.get("/delete", (req, res) => {
    Monster.find({}, (err, foundMonsters) => {
        res.render("monsters/delete.ejs", {
            monsters: foundMonsters,
            tabTitle: "Delete Monsters",
            typeURL: "monsters",
            type: "New Monster",
            typeDelete: "Delete Monster",
        });
    });
});

router.delete("/:id", (req, res) => {
    Monster.findByIdAndRemove(req.params.id, () => {
        res.redirect("/monsters");
    });
});

//update
router.put("/:id", (req, res) => {
    Monster.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect("/monsters/" + req.params.id);
    });
});

//create
router.post("/", (req, res) => {
    Monster.create(req.body, (err, createdMonster) => {
        res.redirect("/monsters");
    });
});

//edit
router.get("/:id/edit", (req, res) => {
    Monster.findById(req.params.id, (err, foundMonster) => {
        res.render("monsters/edit.ejs", {
            monster: foundMonster,
            tabTitle: `Edit ${foundMonster.name}`,
            typeURL: "monsters",
            type: "New Monster",
            typeDelete: "Delete Monster",
        });
    });
});

//show
router.get("/:id", (req, res) => {
    Monster.findById(req.params.id, (err, foundMonster) => {
        res.render("monsters/show.ejs", {
            monster: foundMonster,
            tabTitle: `${foundMonster.name}`,
            typeURL: "monsters",
            type: "New Monster",
            typeDelete: "Delete Monster",
        });
    });
});

//export
module.exports = router;