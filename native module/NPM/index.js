// Created by user on 9/7/2026, 9:01:05 PM
// Last modified by user on 9/8/2026, 10:41:03 PM
// var generateName = require('sillyname');
// import generateName from "sillyName";
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);
import superheroes from "superheroes";

//const name = superheroes.random(); //depleted
const name = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I am ${name}!`);
