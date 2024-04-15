class Person {
  constructor(name, age, gender, occupation) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
  }

  // Method to display person details
  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Occupation: ${this.occupation}`);
  }
}

// Create a new person object
const person1 = new Person("sappu", 26, "Male", "Software Engineer");

// Display details of the person
console.log("Person Details:");
person1.displayDetails();
