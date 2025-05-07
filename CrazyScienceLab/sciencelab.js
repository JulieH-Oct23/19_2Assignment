// TASK 1&2

let person = {
  name: "Julie Hart",
  age: 44,
  study: "Political Science",
  displayInfo() {
    return `${this.name} is a participant in Crazy Science Lab. They are ${this.age}, and studying the field of ${this.study}.`;
  },
};
console.log(person.displayInfo());

// TASK 3

let person1 = {
  name: "Julie Hart",
  age: 44,
  study: "Political Science",
  display: () => {
    return `${person1.name} is a participant in Crazy Science Lab. They are ${person1.age}, and studying the field of ${person1.study}.`;
  },
};

// Observations - arrow functions do not have access to 'this', therfore had to use key/value pair to call method
//  the global object (or undefined in strict mode). Therefore, using `this` in an arrow
// * function as a method of an object does not refer to the object itself, leading to unexpected or undefined values.
// */

// TASK 4

function updateParticipantInfo(name, age, study) {
  return {
    name,
    age,
    study,
    displayInfo() {
      return `${this.name} is a participant in Crazy Science Lab. They are ${this.age}, and studying the field of ${this.study}.`;
    },
  };
}

// Example usage:
const newPerson = updateParticipantInfo("Leo Morgan", 30, "Astrophysics");
console.log(newPerson.displayInfo());
