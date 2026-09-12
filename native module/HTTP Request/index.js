// Created by user on 9/9/2026, 9:23:23 PM
// Last modified by user on 9/10/2026, 10:39:54 PM
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>My name is Sunday Siwale</h1>");
})

app.post("/register", (req, res)=>{
    res.sendStatus(201);
})
app.put("/user/sunday", (req, res)=>{
    res.sendStatus(200);
})
app.patch("/user/sunday", (req, res)=>{
    res.sendStatus(200);
})
app.delete("/user/sunday", (req, res)=>{
    res.sendStatus(200);
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}.`);
})