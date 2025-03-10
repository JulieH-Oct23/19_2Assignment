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
