
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

