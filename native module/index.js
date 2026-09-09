// Created by user on 9/7/2026, 8:19:07 PM
// Last modified by user on 9/8/2026, 9:02:37 PM
const fs = require("fs");

fs.writeFile("message.txt", "Hello from Node.js!", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
