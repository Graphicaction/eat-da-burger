const express = require("express");
const burger = require("../models/burger");

const router = express.Router();
//-------------------HTML routes---------------------------
// Call to get burgers from database and pass the data to index.handlebars
router.get("/", (req, res) => {
    burger.getAll((err, data) => {
        res.render("index", { burgers: data });
    });
});

//-------------------API Routes----------------------------
//Call to insert burger into database and return failure or success
router.post("/api/burgers", (req, res) => {
    const newBurger = {
        burger_name: req.body.burger_name,
    };
    burger.create(newBurger, (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.status(200).end();
    });
});

//Call to update burger into database and return failure or success
router.put("/api/burgers/:id", (req, res) => {
    id = parseInt(req.params.id);
    burger.update(req.body, id, (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.status(200).end();
    });
});   

module.exports = router;
