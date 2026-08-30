// Created by user on 5/17/2026, 12:32:17 PM
// Last modified by user on 7/5/2026, 11:10:56 PM
// function hello(){
//     alert("hi");

// }

// hello();


//switching
// var space = 'first';
// switch(space){
//     case 'first':
//         console.log('gold');
//         break;
//     case 'second':
//             console.log('silver');
//         break;
//     case 'third':
//         console.log('bronze');
//         break;
//     default:
//         console.log('yeeeee')
// }

//rounding off Math Method

// var decimal = Math.random() * 10;
// console.log(decimal);

// var rounded = Math.ceil(decimal);
// console.log(rounded);

//ITTERATING THROUGH A STRING

// var name = 'sunday';

// console.log(name.length);

// for (var i = 0;i<name.length;i++){
//     console.log(name[i]);
// }

// OBJECT Constructor function

// var car = {}; //empty object literal
// car.mileage = 12345;  //dot notation adds properties to the empty object
// car.color = 'red';
// console.log(car);
// car.turnTheKey = function(){
//     console.log('The engine is running!')
// }
// car.lightsOn = function(){
//     console.log('The lights are on!')
// }
// console.log(car);
// car.turnTheKey();
// car.lightsOn();

//OBJECT LITERAL WITH BLACKET notation

// var house = {};
// house.color = 'red';
// house[''] = 4;
// house['color'] = 'pink';
// house['price'] = 40000;
// console.log(house);

// function myFunc(theObject) {
//   theObject.make = "Toyota";
// }

// const myCar = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// console.log(myCar.make); // "Honda"
// myFunc(myCar);
// console.log(myCar.make); // "Toyota"

//function constructors
// class Car{
//   constructor(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   startEngine(){
//     console.log(`The ${this.make} ${this.model}'s engine is running`);
//   }
// }

// const myCar = new Car("Toyota", "Camry", "2026");
// myCar.startEngine();

// //object literal
// const person = {
//   firstName: "Sunday",
//   lastName: "Siwale",
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// console.log(person.getFullName());
// //for loop
// const students = [
//   { name: "Alice", age:25},
//   { name: "Bob", age:22},
//   { name: "Alice", age:35}
// ];

// for(i=0;i<students.length; i++){
//   console.log(students[i].name);
// }

//forEach loop
// const students = [
//   { name: "Alice", age:25},
//   { name: "Bob", age:22},
//   { name: "Alice", age:35}
// ];

// students.forEach(function(student){
//   console.log(student.name);
// });

// console.log("start");

// setTimeout(()=>{
//     console.log("timeout");
// },0);
// Promise.resolve().then(()=>{
//     console.log("promise");
// });

// console.log("End");
// console.log(makeCoffee(2, 40));
// function makeCoffee(sugar, milk) {
//     var instructions = "Boil water, ";
//     instructions += "Pour into cup, ";
//     instructions += "add coffee granules, ";
//     instructions += "add " + sugar + " spoons of sugar, ";
//     instructions += "add " + milk + "% milk.";
    
//     return instructions;
// }

// var car = {
//     maker: "volvo",
//     speed: 160,
//     engine: {
//         size: 2.0,
//         maker: "bmw",
//         fuel: "petrol",
//         pistons: [{maker:"bmw"}, {maker: "bmw2"}]
//     },
//     drive: function(){ return "drive";}

// };
//console.log(car.maker);
// var array = [
//     "string",
//     100,
//     ["embed", 200],
//     {car:"ford"},
//     function(){ return "drive";}
// ];

// function name (fullName) {
//     var fullName = " Sunday Siwale";
//     function concat(name){
//         return "Mr." + name;
//     }
//     return concat(fullName);
// }
//console.log(name());

// function name (fullName) {
    
//     return fullName.firstName + " " + fullName.lastName;
// }
//console.log(name({firstName:"Sunday", lastName: "Siwale"}));


// function name (fullName) {
    
//     return fullName();
// }

//console.log( name(function () { return "embedded";}));

// lastName = "Siwale";
// var myName = "Sunday";

// function printName() {
//     return "Lawrence Turton";
// }

//console.log(lastName, myName, printName());

//console.log(this);
// var object = {
//     prop: this,
//     method: function(){return this;}
// };

// var array = [
//     this,
//     function(){return this;}
// ];

// function global (){
//     return this;
// };

//global.call(object);
//console.log(new global());

//function constructors

// function Apple (x, y, color, score){
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.score = score;
// }

// var apple1 = new Apple(10, 20, "red", 200);
// var apple2 = new Apple(100, 300, "green", 50);
// var apple3 = new Apple(10, 200, "orange", 10);
// console.log(apple1);
// console.log(apple2);
// console.log(apple3);

// const sunday = {
//     firstName: "Sunday",
//     lastName: "Siwale",
//     birthYear: 1999,
//     job: "teacher",
//     friends: ['Allan', 'Sandra', 'Ian', 'Frazer' ],
//     hasDriversLincense: true,
//     // calcAge: function(birthYear){
//     //     return 2037-birthYear;
//     // }
//     // calcAge: function(){
//     //     //console.log(this);
//     //     return 2037-this.birthYear;
//     // }
//     calcAge: function(){
//         this.age = 2037-this.birthYear;
//         return this.age;
//     },

//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()} year old ${sunday.job}, and he has ${this.hasDriversLincense ? 'a' : 'no'} driver's license`
//     }
// }

// console.log(sunday.calcAge());
// console.log(sunday.age);
// console.log(sunday.getSummary());

//console.log(sunday['calcAge'](1991));

// for loop
// const sunday = [
//     "Sunday",
//      "Siwale",
//      2037 - 1999,
//      "teacher",
//      ['Allan', 'Sandra', 'Ian', 'Frazer' ],
//      true
 
// ]

// const types = [];

// for (let i = 0; i<sunday.length; i++) {
    //console.log(sunday[i], typeof sunday[i]);
    //types[i] = typeof sunday[i];

//     types.push(typeof sunday[i]);
// }

//console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// //console.log(ages);

// //console.log("---ONLY STRINGS---");
// for (let i = 0; i < sunday.length; i++) {
//     if (typeof sunday[i] !== 'string') continue;
//     //console.log(sunday[i], typeof sunday[i]);
// }
// //console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < sunday.length; i++) {
//     if (typeof sunday[i] === 'number') break;
//     //console.log(sunday[i], typeof sunday[i]);
// }


// for (let exercise = 1; exercise < 4; exercise++) {
//     //console.log(`----start exercise ${exercise}`);

// for (let rep = 1; rep < 4; rep++) {
//     //console.log(`Exercise ${exercise} lift weight repetition ${rep}🏋️`);
// }
// } 

const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        value:  Number(prompt('degrees celsius')),
    };
    //console.log(measurement);
    //console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;

};

//console.log(measureKelvin());
// console.warn(measureKelvin());
// console.error(measureKelvin());


