const express = require("express");
const router = express.Router();
const Quest = require("../models/quest");

//routes
//index
router.get("/", (req, res) => {
    Quest.find({}, (err, foundQuests) => {
        res.render("quests/index.ejs", {
            quests: foundQuests,
            tabTitle: "Quests",
            typeURL: "quests",
            type: "New Quest",
        });
    });
});

//new
router.get("/new", (req, res) => {
    res.render("quests/new.ejs", {
        tabTitle: "New Quest",
        typeURL: "quests",
        type: "New Quest",
    });
});

//delete
router.get("/delete", (req, res) => {
    Quest.find({}, (err, foundQuests) => {
        res.render("quests/delete.ejs", {
            quests: foundQuests,
            tabTitle: "Delete Quests",
            typeURL: "quests",
            type: "New Quest",
        });
    });
});

router.delete("/:id", (req, res) => {
    Quest.findByIdAndRemove(req.params.id, () => {
        res.redirect("/quests");
    });
});

//update
router.put("/:id", (req, res) => {
    Quest.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect("/quests/" + req.params.id);
    });
});

//create
router.post("/", (req, res) => {
    Quest.create(req.body, (err, createdQuest) => {
        res.redirect("/quests");
    });
});

//edit
router.get("/:id/edit", (req, res) => {
    Quest.findById(req.params.id, (err, foundQuest) => {
        res.render("quests/edit.ejs", {
            quest: foundQuest,
            tabTitle: `Edit ${foundQuest.name}`,
            typeURL: "quests",
            type: "New Quest",
        });
    });
});

//show
router.get("/:id", (req, res) => {
    Quest.findById(req.params.id, (err, foundQuest) => {
        res.render("quests/show.ejs", {
            quest: foundQuest,
            tabTitle: `${foundQuest.name}`,
            typeURL: "quests",
            type: "New Quest",
        });
    });
});

//export
module.exports = router;