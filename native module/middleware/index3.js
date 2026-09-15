// Created by user on 9/13/2026, 11:04:29 PM
// Last modified by user on 9/15/2026, 7:30:29 PM
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
    console.log(req.body);

    const street = req.body.street;
    const pet = req.body.pet;

    req.bandName = street + pet;

    next();
}

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", bandNameGenerator, (req, res) => {
    res.send(`<h1>Your band name is:</h1><h2>${req.bandName}</h2>`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}.`);
});

