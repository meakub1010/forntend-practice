// 1️⃣ What is a Class in JavaScript?

// A class is a blueprint for creating objects with shared properties and methods.

// Introduced in ES6, it’s mostly syntactic sugar over traditional prototype-based inheritance

class Person {
  // Constructor: called when creating a new instance
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }

  // Static method (not tied to instances)
  static species() {
    return "Homo sapiens";
  }
}

// Create instance
const john = new Person("John", 30);
john.greet(); // Hello, my name is John and I am 30

// Call static method
console.log(Person.species()); // Homo sapiens



// Inheritance

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // call parent constructor
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as ${this.jobTitle}`);
  }
}

const alice = new Employee("Alice", 28, "Engineer");
alice.greet(); // Hello, my name is Alice and I am 28
alice.work();  // Alice is working as Engineer




// PRIVATE AND PUBLIC FIELDS
class BankAccount {
  #balance = 0; // private field
  constructor(owner) {
    this.owner = owner; // public field
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("John");
account.deposit(100);
console.log(account.getBalance()); // 100
//console.log(account.#balance);     // Error: private field
