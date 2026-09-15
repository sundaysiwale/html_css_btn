// Created by user on 9/13/2026, 10:44:51 PM
// Last modified by user on 9/13/2026, 10:58:16 PM
import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
    console.log("Request method: ", req.method);
    console.log("Request method: ", req.url);
    next();
};

app.use(logger);

app.get("/", (req, res) =>{
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`listening on port ${port}.`);
});