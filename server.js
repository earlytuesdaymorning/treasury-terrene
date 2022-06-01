//dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

//controllers
const mapsController = require("./controllers/maps.js");
const monstersController = require("./controllers/monsters.js");
const npcsController = require("./controllers/npcs.js");
const questsController = require("./controllers/quests.js");
const specialItemsController = require("./controllers/special-items.js");

//database configuration
mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
});

//database connection
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " mongo is not running"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use("/maps", mapsController);
app.use("/monsters", monstersController);
app.use("/npcs", npcsController);
app.use("/quests", questsController);
app.use("/special-items", specialItemsController);

//routes
//home
app.get("/", (req, res) => {
    res.render("home.ejs", {
        tabTitle: "Home",
        typeURL: " ",
        type: " ",
    });
});

//app is listening
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
});