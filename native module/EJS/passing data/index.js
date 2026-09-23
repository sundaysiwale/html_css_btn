// Created by user on 9/23/2026, 9:13:47 PM
// Last modified by user on 9/23/2026, 10:30:36 PM
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const numLetters = req.body["fname"].length + req.body["lname"].length;
    res.render("index.ejs", {numberOfLetters: numLetters});
});

app.listen(port, () =>{
    console.log(`listening on ${port}.`);
});