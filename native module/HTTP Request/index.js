// Created by user on 9/9/2026, 9:23:23 PM
// Last modified by user on 9/9/2026, 11:20:19 PM
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>My name is Sunday Siwale</h1>");
})

app.get("/About", (req, res)=>{
    res.send("<h1>About me</h1><br><p>I am a fullstack developer and looking forward to work with you on various projects.</p>");
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}.`);
})