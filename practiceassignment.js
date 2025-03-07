// // async practice assignment 12.5

// function goToGym() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pumpedIron = true;
//             if (pumpedIron) {
//                 resolve("You're Packing On Mass!");
//             }
//             else{
//                 reject("You're getting flabby. Stop skipping the gym.");
//             }
//         }, 2100);
//     });
// }

// function teachYoga () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const namaste = true;
//             if (namaste) {
//                 resolve("Continue bringing peace through breathwork.");
//             }
//             else {
//                 reject("Your commitment to peace is not negotiable.");
//             }
//         }, 1200);
//     });
// }

// function cleanHouse() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const declutter = true;
//             if (declutter) {
//                 resolve("Keep your house and mind tidy.");
//             }
//             else {
//                 reject("A messy house equals a messy mind.");
//             }
//         }, 1500);
//     });
// }

// async function dailyActivites() {

//     try{
//     const gotToGymResult = await goToGym();
//     console.log(gotToGymResult);

//     const teachYogaResult = await teachYoga();
//     console.log(teachYogaResult);

//     const cleanHouseResult = await cleanHouse();
//     console.log(cleanHouseResult);

//     console.log("All daily activity functions ran properly.");
//     }
// catch (error) {
//     console.error(error);
//     }
// }

// dailyActivites()

// let favoriteNumber = 22;
// let baseURL = "http://numbersapi.com";

// async function adam() {
//     try {
//         let response = await axios.get(`${baseURL}/${favoriteNumber}?json`);
//         console.log(response.data);
//     } catch (error) {
//         console.error("Error fetching data from numbers api:", error); 
//     }
// }
// adam();

// // second part
// const randomNumbers = [21, 19, 17];

// async function kidsAges() {
//     try {
//         let response = await axios.get(`${baseURL}/${randomNumbers}`)
//         console.log(response.data);
//     } catch {
//         console.error("Error fetching kids ages for random:", error);
//     }
// }
// kidsAges();

// // third part
// async function finalUnit() {
//     const button = document.querySelector("button");
//     button.addEventListener("click", makeShitWork);

//     async function makeShitWork() {
//         try {
//             let facts = await Promise.all(
//                 Array.from({length:4}, () => axios.get(`${baseURL}/${favoriteNumber}?json`))
//             );
//             facts.forEach(response => {
//                 document.body.insertAdjacentHTML('beforeend', `<p>${response.data.text}</p>`);
//             });
//         } catch (error) {
//             console.error("Error fetching data for final unit", error);
//         }
//     }
// }
// finalUnit();

// constructior functionpractice
// let person = function(name, gender, birthYear) {
//     this.name = name;
//     this.gender = gender;
//     this.birthYear = birthYear;
//     this.calcAge = function() {
//         let age = new Date().getFullYear() - this.birthYear;
//         console.log(age);
//     }
// }

// let larry = new person('Larry', 'Male', 1978);
// console.log(larry);

// let julie = new person('Julie', 'Female', 1981);
// console.log(julie);


// let personalVehicle = function(make, model, year, color, parkingSpace, licensePlate) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.parkingSpace = parkingSpace;
//     this.licensePlate = licensePlate;
// }

// let lexus =  new personalVehicle('Lexus', 'is300', 2019, 'White', 'B203', 'iA 469SX');
// console.log(lexus);


// let citizenUser = function(firstName, lastName, streetAddress, city, state, phoneNumber, emailAddress, issue1, issue2, issue3, profilePic) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.phoneNumber = phoneNumber;
//     this.emailAddress = emailAddress;
//     this.issue1 = issue1;
//     this.issue2 = issue2;
//     this.issue3 = issue3;
//     this.profilePic = profilePic;
// }

// let julieHart = new citizenUser('Julie', 'Hart', '1617 North 29th Street', 'Boise', 'Idaho', 2088635815, 'juliemarcumhart@gmail.com', 'womensAutonomy', 'democracy', 'endingOligarcy', 'image569.jpg');
// console.log(julieHart);

// Object Oriented Mosh Practice
// reduce complexity
//  hide details and complexity to show only details and isolates impact of changesin in Code

// programming paradigim not a language,  Consider a course from Mosh on OOP.  

// Encapsulation - grouping reated variables and  functions that operate on those variables and group them into an object.  The old way was vairables decoupled from functions.  Encapsulation is process of joining the two into a single object with object properties.

// Abstration - example dvd - few buttons, but complex guts internally all complexity hidden from users.  USe abstraction to hide properties and functions from the ourside.  aso helps to prevent changes meant to only impact the object and not other code, so when updates minimal impact of bugs..

// Inheretence - allows you to inherent redundant code, instead of redefining all these properties we can define once in generic html oject and have other objects inheret these properties.

// Polymorphism - many forms, technique to get rid of if/else or switch/case statements with element render

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('circlePlaceholder'); 
//     }
// };

// circle.draw();

// FactoryFunction
// function createCircle( radius) {
//     return {
//         radius,
//         draw: function( ) {
//             console.log('circlePlaceholder'); 
//         }
//     };
// }
// const circle = createCircle(1);



//  function Circle(radius) {
//     this.radius = radius;
//     this.defaultLocation = { x: 0,  y: 0 };
//     this.computeOptimumLocation = function(factor) {

//     }

//     this.draw = function( ) {
//         this.computeOptimumLocation( );
//         console.log('draw');
//     };
//  }
//  const circle = new Circle(10);
//  circle.computeOptimumLocation( );
//  circle.draw( );

// for (let key in circle) {
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle)
// console.log('Circle has a radius.');


// 

// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0,  y: 0 };
//     let computeOptimumLocation = function(factor) {

//     }

//     this.draw = function( ) {
//         let x, y;
//         computeOptimumLocation(0.1 );
//         console.log('draw');
//         this.radius
//     };
//  }
//  const circle = new Circle(10);
// circle.draw ( );
// 

// getters and setters

// function Circle(radius) {
//     this.radius = radius;
    
//     let defaultLocation = { x: 0,  y: 0 }; 

//     this.getdefaultLocation = function ( ) {
//         return defaultLocation;
//     };

//     this.draw = function( ) {
//         console.log('draw');
//     };

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function ( ) {
//             return defaultLocation;
//         },
//         set: function (value) {
//             if (!value.x || !value.y)
//             throw new Error('Invalid Location');

//             defaultLocation = value;
//         }
//     });
// }


// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw ( );

//MOSH OOP Practice

// function Stopwatch( ) {
//     let startTime, endTime, running, duration = 0;

//     this.start = function ( ) {
//         if (running)
//         throw new Error('Stopwatch has already started.');
//         running = true;
//         startTime = new Date();
//     };

//     this.stop = function ( ) {
//         if (!running)
//         throw new Error('Stopwatch is not started.');
//         running = false;
//         endTime = new Date();
//         const seconds = endTime.getTime() - startTime.getTime() / 1000;
//         duration += seconds;
//     };

//     this.reset = function ( ) {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     };
    
//     Object.defineProperty(this, 'duration', {
//         get: function() {
//             return duration;}
//     });
// }












