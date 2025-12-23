class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hey my name is ${this.name} and I am ${this.age} years old`);
  }
}

const p1 = new Person("soumen", 23);
p1.greet();
const p2 = new Person("Alice", 24);
p2.greet();


//Object is the real life entities
//class is the blueprint of the object
//contructor is the spicel method inside of the class that runs automatically when we create a new object using the new keyword