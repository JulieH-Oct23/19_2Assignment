// // // async practice assignment 12.5

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
//         }, 210);
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
//         }, 1700);
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

// /////////////////////////

// let favNumber = 22;
// let baseURL = "http://numbersapi.com";

// 1.
// async function part1() {
//   try {
//     let response = await axios.get(`${baseURL}/${favNumber}?json`);
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching data for part1:", error);
//   }
// }
// part1();




// // PART2
// const favNumbers = [3, 7, 9];
// async function part2() {
//   try {
//     let response = await axios.get(`${baseURL}/${favNumbers}?json`);
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching data for part2:", error);
//   }
// }
// part2();




// // PART3
// async function part3() {
//   const button = document.querySelector("button");
//   button.addEventListener("click", clickAndDisplayData);

//   async function clickAndDisplayData() {
//     try {
//       let facts = await Promise.all(
//         Array.from({ length: 4 }, () => axios.get(`${baseURL}/${favNumber}?json`))
//       );
//       facts.forEach(response => {
//         document.body.insertAdjacentHTML('beforeend', `<p>${response.data.text}</p>`);
//       });
//     } catch (error) {
//       console.error("Error fetching data for part3:", error);
//     }
//   }
// }
// part3();

// //////////////////////////////////////////

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


// //////////////////////////////////////////////////////////

// function citizenHeadline(userName, age, issue1, issue2, issue3) {
//     return {
//       userName,
//       age,
//       issue1,
//       issue2,
//       issue3,
//       talk() {
//         return `Hello, my name is ${userName}.  My TOP THREE ISSUES are: ${issue1}, ${issue2}, and ${issue3}.`
//       }
//     }
//   }
  
//   const citizen1 = citizenHeadline('Julie Hart', 44, 'Womens Healthcare Autonomy', 'Civil Liberties for All', 'Due Process of Law');
  
  
//   function citizenRecruit(userName, age, issue1, issue2, issue3) {
//     return {
//       userName,
//       age,
//       issue1,
//       issue2,
//       issue3,
//       talk() {
//         return `Hello, my name is ${userName}.  My TOP THREE ISSUES are: ${issue1}, ${issue2}, and ${issue3}.  Click here to follow your top 3 issues & start holding your elected officials accountable today.`
//       }
//     }
//   }
//   const citizenRecruit1 = citizenRecruit('Larry Moody', 47, 'Democracy', 'Due Process of Law', 'Trade Policy');
  
// //////////////////////////////////////////////////
  
// document.addEventListener("DOMContentLoaded", () => {

//     const baseURL = 'https://deckofcardsapi.com/api/deck';
  
//   //   async function drawOneCard() {
//   //     try {
//   //       const response = await axios.get(`${baseURL}/new/draw/`);
//   //       const { suit, value } = response.data.cards[0];
//   //       console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
//   //     } catch (error) {
//   //       console.error("Error fetching card data:", error);
//   //     }
//   //   }
//   //    drawOneCard();
    
    
//   //  // Part Two
//   //   async function drawTwoSequentiallly() {
//   //     try {
//   //       const firstCardResponse = await axios.get(`${baseURL}/new/draw/`);
//   //       const deckId = firstCardResponse.data.deck_id;
//   //       const secondCardResponse = await axios.get(`${baseURL}/${deckId}/draw/`);
//   //         [firstCardResponse.data, secondCardResponse.data].forEach(cardData => {
//   //           const { suit, value } = cardData.cards[0];
//   //           console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
//   //         });
//   //       } catch (error) {
//   //         console.error("Error fetching card data:", error);
//   //       }
//   //     }
//   //     drawTwoSequentiallly();
    
    
    
    
//   // Part Three
//       async function setup() {
//         try {
//           const btn = document.querySelector("button");
//           const cardArea = document.querySelector("#card-area");
    
//           const deckResponse = await axios.get(`${baseURL}/new/shuffle/`);
//           const deckId = deckResponse.data.deck_id;
    
//           btn.style.display = "block";
//           btn.addEventListener("click", async () => {
//             try {
//               const cardResponse = await axios.get(`${baseURL}/${deckId}/draw/`);
//               const card = cardResponse.data.cards[0];
//               const cardImg = document.createElement("img");
//               const angle = Math.random() * 90 - 45;
//               const randomX = Math.random() * 40 - 20;
//               const randomY = Math.random() * 40 - 20;
    
//               cardImg.src = card.image;
//               cardImg.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`;
//               cardArea.appendChild(cardImg);
    
//               if (cardResponse.data.remaining === 0) {
//                 btn.remove();
//               }
//             } catch (error) {
//               console.error("Error drawing card:", error);
//             }
//           });
//         } catch (error) {
//           console.error("Error setting up deck:", error);
//         }
//       }
    
//       setup();
  
//     });

// /////////////////////////////////////////////////////////////////////////


// let destination = "Ancient Egypt"; 
// console.log(`Destination: ${destination}`);

// destination = "Medieval Europe";
// console.log(`New Destination: ${destination}`);

// const travelDate = "2024-03-15"
// console.log(`Travel Date: ${travelDate}`);
// // cannot change value of travelDate as it is CONST - constant and only set at initialization

// console.log(`Time Machine Model: ${timeMachineModel}`);
// var timeMachineModel = "T-800";
// // console printed undefined before intialization
// // setting timeMachineModel to var value allowed the hoisting of valiable to then register before console.log to print the object literal. 



//  let activateHyperdrive = ( ) => console.log("Hyperdrive Activated!");
//  activateHyperdrive()

// let scanForLife = ( ) => "No lifeform detected";
// console.log(scanForLife());

// let currentCoordinates = ( ) => ({x: 42,  y: 87, z: 91});
// console.log(currentCoordinates());

// let spacecraft = {
//     name: "Better Than Han",
//     receiveMessage: (message) => 
//     {
//         console.log(`Message received: ${message}`);
//         console.log(`This spacecraft is called: ${this.name}`);
//     }
// };
// spacecraft.receiveMessage("hello from mars" );

// Console doesnt run shipname as this refers to global window in this instance.

// //////////////////////////////////////////////////////////////////////////////////////////


// function estRoutine () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const afterSchool = true;
//             if(afterSchool) {
//                 resolve("Great job priortizing your routine and objectives.")
//             }
//             else {
//                 reject("You did not establish your routine.  You are risking your life goals and objectives.")
//             }
//         }, 350);
//     });
// }

// function pracRoutine() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const everyWeekday = true;
//             if(everyWeekday) {
//                 resolve("Harry priortized his future and grades all week.")
//             }
//             else {
//                 reject("Harry did not priortize his routine this week.")
//             }
//         },750);
//     });
// }

// function enfRoutine() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             const everyWeek = true;
//             if(everyWeek) {
//                 resolve("Harry practiced his routine week after week to improve his grades.")
//             }
//             else {
//                 reject("Harry did not practice his weekday routine afterschool. ")
//             }
//         }, 1500);
//     });
// }


// async function projectGraduation() {

//     try{
//     const estRoutineResult = await estRoutine();
//     console.log(estRoutineResult);

//     const pracRoutineResult = await pracRoutine();
//     console.log(pracRoutineResult);

//     const enfRoutineResult = await enfRoutine();
//     console.log(enfRoutineResult);

//     console.log("Harry can't possibly lose.  He's done all he needs to graduate.");
//     }
// catch (error) {
//     console.error(error);
//     }
// }

// projectGraduation()
// ///////////////////////////////////////////////////////////////////////////////////





// let favNumber = 22;
// let baseURL = "http://numbersapi.com";
// async function part1() {
//   try {
//     let response = await axios.get(`${baseURL}/${favNumber}?json`);
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching data for part1:", error);
//   }
// }
// part1();



// // PART2
// const favNumbers = [3, 7, 9];
// async function part2() {
//   try {
//     let response = await axios.get(`${baseURL}/${favNumbers}?json`);
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching data for part2:", error);
//   }
// }
// part2();



// // PART3
// async function part3() {
//   const button = document.querySelector("button");
//   button.addEventListener("click", clickAndDisplayData);

//   async function clickAndDisplayData() {
//     try {
//       let facts = await Promise.all(
//         Array.from({ length: 4 }, () => axios.get(`${baseURL}/${favNumber}?json`))
//       );
//       facts.forEach(response => {
//         document.body.insertAdjacentHTML('beforeend', `<p>${response.data.text}</p>`);
//       });
//     } catch (error) {
//       console.error("Error fetching data for part3:", error);
//     }
//   }
// }
// part3();

// ////////////////////////////////////////////
// news API practice



//  simple get command
// const baseURL = ('https://newsapi.org/v2/everything?q=keyword&apiKey=d00ef03eb2234c9e853c1271025f2aa4')
// const response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=d00ef03eb2234c9e853c1271025f2aa4')




// fetch ('https://newsapi.org/v2/everything?q=keyword&apiKey=d00ef03eb2234c9e853c1271025f2aa4')
//     .then(response => console.log(response)) 
//     .catch(error => console.error(error));


// async function part1() {
//   try {
//     let response = await fetch();
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching data for part1:", error);
//   }
// }
// part1();

// const url = 'https://pokeapi.co/api/v2/ability/7/'

// async function getData( ) {
//     const pokemon = await fetch(url)
//     const smile = await pokemon.json()
//     console.log(pokemon)
// }

// getData()


// const url = 'https://pokeapi.co/api/v2/pokemon'

// async function getData( ) {
//     const response = await fetch(url)
//     const data = await response.json()
//     return(data)
// }

// getData()

// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(res => {
//     return res.json( );
// })

// .then(data => {
//     (user => {
//         const markup = `${user}`;
//         document.querySelector('pokeChar').insertAdjacentHTML('beforeend', markup);
//     })
// });


const pokemonCount = 386;
let pokeDex = { };  

window.onload = async function( ) {
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
    
    let pokemon = document.createElement('div');
    pokemon.id = i;
    pokemon.innerText = i.toString() +  ". " + pokeDex[i]["name"].toUpperCase();
    pokemon.classList.add("pokemon-name");
    pokemon.addEventListener("click", updatePokemon);
    document.getElementById("pokemon-list").append(pokemon);
    }

    document.getElementById('pokemon-description').innerText = pokeDex[1]['desc'];
console.log(pokeDex);

}

async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString( );
    let response = await fetch(url);
    let pokemon = await response.json();
    // console.log(pokemon)

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];
    let pokemonAbilities = pokemon["abilities"];
    let pokemonMoves = pokemon['moves'];
    let pokemonEggs = pokemon['eggs']

    response = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await response.json( );
    
    // console.log(pokemonDesc);
    pokemonDesc = pokemonDesc["flavor_text_entries"][7]["flavor_text"]

    pokeDex[num] =  {"name": pokemonName, "img" : pokemonImg, "types" : pokemonType, "desc" : pokemonDesc, "abilities": pokemonAbilities, "moves": pokemonMoves, "eggs": pokemonEggs}
}

function updatePokemon ( ) {
    document.getElementById("pokemon-img").src = pokeDex[this.id]["img"];
    
    let typesDiv = document.getElementById('pokemon-types');
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove( );
    }

    let types = pokeDex[this.id]['types'];
    for(let i = 0 ;  i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = types[i]['type']['name'].toUpperCase( );
        type.classList.add("type-box");
        type.classList.add(types[i]['type']['name']);
        typesDiv.append(type);
    }
    document.getElementById('pokemon-description').innerText = pokeDex[this.id]["desc"]
    document.getElementById('pokemon-description').innerText = pokeDex[this.id]["desc"]
}