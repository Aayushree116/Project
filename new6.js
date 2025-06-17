class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }
  
  study() {
    console.log(`${this.name} is studying at ${this.school}`);
  }

  // Method to change school name
  changeSchool(newSchool) {
    this.school = newSchool;
    console.log(`School changed to ${this.school}.`);
  }
}

let student1 = new Student("Aayushree", "Adarsha");

student1.greet();
student1.study();

