  // function fullName(firstName, lastName) {
  //   console.log(firstName + " BOOGEYMAN " + lastName, "is at it again.");
  // }

// factory function is just a funciton that creates an object and returns the object.

// const me = {
//   name: 'Julie',
//   talk() {
//     return `Hello I am ${this.name}`
//   }
// }

// const ella = {
//   name: 'Ella',
//   talk () {
//     return 'I am always sick and cant stop coughing.'
//   }
// }

// function studentFactory(name, gradDate, prog) {
//   return {
//     name,
//     gradDate,
//     prog,
//     talk () {
//       return `Hello, my name is ${name}.  I am a ${prog} planning to graduate in ${gradDate}`
//     }
//   }
// } 

// const me = studentFactory('Julie', 'May 2025', 'Software Engineering Student');

// const madi = studentFactory('Madi', 'May 2028', 'Political Science')


// function citizenHeadline(userName, age, issue1, issue2, issue3) {
//   return {
//     userName,
//     age,
//     issue1,
//     issue2,
//     issue3,
//     talk() {
//       return `Hello, my name is ${userName}.  My TOP THREE ISSUES are: ${issue1}, ${issue2}, and ${issue3}.`
//     }
//   }
// }

// const citizen1 = citizenHeadline('Julie Hart', 44, 'Womens Healthcare Autonomy', 'Civil Liberties for All', 'Due Process of Law');


// function citizenRecruit(userName, age, issue1, issue2, issue3) {
//   return {
//     userName,
//     age,
//     issue1,
//     issue2,
//     issue3,
//     talk() {
//       return `Hello, my name is ${userName}.  My TOP THREE ISSUES are: ${issue1}, ${issue2}, and ${issue3}.  Click here to follow your top 3 issues & start holding your elected officials accountable today.`
//     }
//   }
// }
// const citizenRecruit1 = citizenRecruit('Larry Moody', 47, 'Democracy', 'Due Process of Law', 'Trade Policy');


// ///////////////////////////////////////////////////////////////////////////////////

// let num = 1;

// while (num <13) {
//   if(num % 2==0 && num % 5==0) {
//   console.log("FizzBuzz");
//   }
//   else if(num % 2==0) {
//     console.log("Fizz");
//   }
//   else if(num % 5 ==0) {
//     console.log("Buzz");
//   }
//   else {
//     console.log(num);
//   }
//   num = num +1;
// }

// let num = 1;
// while(num<53){
//   if(num % 2 ==0) {
//     console.log(num + " Even Number");
//   }
//   else {
//     console.log(num + " Odd Number");
//   }
//   num = num+1;
// }

// ////////////////////////////////////////////////////////////////////////////////////////////

function animalSightings(...animals) {
  console.log(`Sitings: ${animals}`);
}

animalSightings("Yogi the Yorkie", "Booberry the Bernard", "Larry the Dad", "Harry the Teen", "Rhino", "Lion", "Starfish");


const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"]
const combinedHabitats= [...forestHabitats, ...savannahHabitats];
console.log(`Combined Habitats: ${combinedHabitats}`);


const starFishStatus = {
  population: 5,
  status: "Endangered"
};

const updatedStarFishStatus = {
  ...starFishStatus, 
  population:7,
  status: "Needs Help"
};

console.log(`Updated Star Fish Status: ${updatedStarFishStatus}`);


const lionFishProfile = {
  name: "Leo",
  age: 3,
  species: "Poison"
};

const lionFishGeneticProfile = {
  ...lionFishProfile,
  genetics: "Poison Spines"
};

console.log(`Original Lion Fish Profile: ${lionFishProfile}`);
console.log(`Lion Fish Genetic Profile: ${lionFishGeneticProfile}`);


const habitatHealth = {
  waterQuality: "Excellent",
  foodSupply:  {
      herbivores: "Limited",
      carnivores: "Abundant"
  }    
};

const updatedHabitatHealth = {
  ...habitatHealth, foodSupply: {...habitatHealth.foodSupply, herbibores:"Plentiful"}};
console.log("Original Habitat Health:", habitatHealth);
console.log("Updated Habitat Health:", updatedHabitatHealth);

// //////////////////////////////////////////////////////////////////////////////////////


const coordinates = {x: 34, y: 42, z: 67};

const {x, y} = coordinates;
console.log(`Coordinates found: x=${x}, y=${y}`);


const locations = {
	first: "Cave of Wonders",
	second: "Lake of Mystery",
	third: "Mount of Ages",
	fourth: "Desert of Shadows"
};

const {
	first,
	second,
	...remaining
} = locations;

console.log(`Key locations: ${first}, ${second}`);

const doorCode = {
	upper: "Alpha",
	lower: "Omega"
};

const {
	upper,
	middle = remaining.third,
	lower
} = doorCode;
console.log(`Door code sequence: ${upper}, ${middle}, ${lower}`);


const riddle = {
	ancientWord: "Sphinx",
	modernWord: "Cat"
};

const {ancientWord: translation} = riddle;
console.log(`The guardian says: ${translation}`);


const elements = ["Fire", "Water", "Earth", "Air"];

const [firstElement, secondElement] = elements;
console.log(`Essential elements: ${firstElement}, ${secondElement}`);


const stones = [1, 2, 3, 4, 5, 6];

const [firstStone, , , , , sixthStone] = stones;
console.log(`Extracted stones: ${firstStone}, ${sixthStone}`);


const shadows = ["Darkness", "Silence", "Whisper", "Echo"];

const [visible, ...hiddenShadows] = shadows;
console.log(`Visible shadow: ${visible}, Hidden shadows: ${hiddenShadows.join(", ")}`);


function revealPath ({direction, distance})
{
	console.log(`Move ${distance} meters towards ${direction}.`);
}

revealPath({direction: "North", distance: 100});


function mixPotion ({ingredient1 = "Water", ingredient2 = "Fireflower"} = {})
{
	console.log(`Mixing ${ingredient1} and ${ingredient2}`);
}

mixPotion({ingredient1: "Lavender"});


function castSpell ([ingredient1, ingredient2])
{
	console.log(`Casting spell with ${ingredient1} and ${ingredient2}`);
}

castSpell(["Moonstone", "Unicorn Horn", "Sunflower"]);


const nestedSecret = {outer: {inner: "The Final Key"}};

const {outer: {inner: finalKey}} = nestedSecret;
console.log(`Unveiled secret: ${finalKey}`);

let stoneA = "Emerald";
let stoneB = "Ruby";

[stoneB, stoneA] = [stoneA, stoneB];
console.log(`Stones swapped: A=${stoneA}, B=${stoneB}`);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

