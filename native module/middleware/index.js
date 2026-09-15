// Created by user on 9/12/2026, 9:51:20 PM
// Last modified by user on 9/13/2026, 11:40:15 PM
import express from "express";
import bodyParser from "body-parser";
import{ dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
});

app.listen(port, () =>{
    console.log(`listening on ${port}.`);
});