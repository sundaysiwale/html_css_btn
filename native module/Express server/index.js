// Created by user on 9/9/2026, 8:36:03 PM
// Last modified by user on 9/9/2026, 8:47:24 PM
import express from "express";
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}.`);
})