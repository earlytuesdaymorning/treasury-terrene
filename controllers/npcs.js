const express = require("express");
const router = express.Router();
const NPC = require("../models/npc");

//routes
//index
router.get("/", (req, res) => {
    NPC.find({}, (err, foundNPCs) => {
        res.render("npcs/index.ejs", {
            npcs: foundNPCs,
            tabTitle: "NPCs",
            typeURL: "npcs",
            type: "New NPC",
        });
    });
});

//new
router.get("/new", (req, res) => {
    res.render("npcs/new.ejs", {
        tabTitle: "New NPCs",
        typeURL: "npcs",
        type: "New NPC",
    });
});

//delete
router.get("/delete", (req, res) => {
    NPC.find({}, (err, foundNPCs) => {
        res.render("npcs/delete.ejs", {
            npcs: foundNPCs,
            tabTitle: "Delete NPCs",
            typeURL: "npcs",
            type: "New NPC",
        });
    });
});

router.delete("/:id", (req, res) => {
    NPC.findByIdAndRemove(req.params.id, () => {
        res.redirect("/npcs");
    });
});

//update
router.put("/:id", (req, res) => {
    NPC.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect("/npcs/" + req.params.id);
    });
});

//create
router.post("/", (req, res) => {
    NPC.create(req.body, (err, createdNPC) => {
        res.redirect("/npcs");
    });
});

//edit
router.get("/:id/edit", (req, res) => {
    NPC.findById(req.params.id, (err, foundNPC) => {
        res.render("npcs/edit.ejs", {
            npc: foundNPC,
            tabTitle: `Edit ${foundNPC.name}`,
            typeURL: "npcs",
            type: "New NPC",
        });
    });
});

//show
router.get("/:id", (req, res) => {
    NPC.findById(req.params.id, (err, foundNPC) => {
        res.render("npcs/show.ejs", {
            npc: foundNPC,
            tabTitle: `${foundNPC.name}`,
            typeURL: "npcs",
            type: "New NPC",
        });
    });
});

//export
module.exports = router;