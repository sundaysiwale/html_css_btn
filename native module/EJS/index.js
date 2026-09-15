// Created by user on 9/15/2026, 8:48:02 PM
// Last modified by user on 9/15/2026, 11:28:43 PM
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date("September 12, 2026 22:45:17");
    const day = today.getDay();

    //console.log(day);
    let type ="a weekday";
    let adv = "it's time to work hard!";

    if (day === 0 || day === 6) {
         type ="the weekend";
         adv = "it's time to have some fun!";
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: adv,
    });
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}.`);
});