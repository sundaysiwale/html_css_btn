// Created by user on 9/13/2026, 10:02:33 PM
// Last modified by user on 9/13/2026, 10:35:52 PM
import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) =>{
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`listening on port ${port}.`);
});