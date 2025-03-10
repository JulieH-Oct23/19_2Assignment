
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