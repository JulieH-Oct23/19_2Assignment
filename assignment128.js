
let destination = "Ancient Egypt"; 
console.log(`Destination: ${destination}`);

destination = "Medieval Europe";
console.log(`New Destination: ${destination}`);

const travelDate = "2024-03-15"
console.log(`Travel Date: ${travelDate}`);
// cannot change value of travelDate as it is CONST - constant and only set at initialization

console.log(`Time Machine Model: ${timeMachineModel}`);
var timeMachineModel = "T-800";
// console printed undefined before intialization
// setting timeMachineModel to var value allowed the hoisting of valiable to then register before console.log to print the object literal. 



 let activateHyperdrive = ( ) => console.log("Hyperdrive Activated!");
 activateHyperdrive()

let scanForLife = ( ) => "No lifeform detected";
console.log(scanForLife());

let currentCoordinates = ( ) => ({x: 42,  y: 87, z: 91});
console.log(currentCoordinates());

let spacecraft = {
    name: "Better Than Han",
    receiveMessage: (message) => 
    {
        console.log(`Message received: ${message}`);
        console.log(`This spacecraft is called: ${this.name}`);
    }
};
spacecraft.receiveMessage("hello from mars" );

// Console doesnt run shipname as this refers to global window in this instance.