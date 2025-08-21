// 1. prototypal inheritance and the prototype chain


// In Javascript, prototypal inheritance is a feature where objects inherit properties and methods 
// from other objects, known as their prototype. instead of inheriting from classes like C#/JAVA


/*

	- every object in js has an internal property called [[Prototype]], accessible via __proto__ or Object.getPrototypeOf()
	- which points to another object. This forms a chain called the prototype chain
	- if a method or var is not avialable in the object, JS look at the object's prototype



	Object.getPrototypeOf()
	Object.setPrototyoeOf()


	// no circular references are allowed in setting __proto__
	// proto val must be object or null
	/



	const bear = new Animal('bear');

	what "new" does in above line

	- new creates new empty object {}
	- sets the prototype of the object to Animal.prototype
	- bind this inside the constructor to the new object
	- execute the constructor code
	- returns the object

	- without new this refers to the global object

*/ 



// __proto__

const person = {
	alive: true
}

const musician = {
	plays: true
}

console.log(person.alive);
console.log(musician.plays);

console.log(musician.alive); // undefined

musician.__proto__ = person;
console.log(musician.alive); // true, since prototype updated to person

console.log(musician);


const car = {
	doors: 2,
	seats: "vinyl",
	get seatMaterials() {
		return this.seats;
	},
	set seatMaterials(material){
		this.seats = material
	}
}


const luxCar = {};
Object.setPrototypeOf(luxCar, car);
luxCar.seatMaterials = "leather";

console.log(luxCar);
console.log(luxCar.doors);
console.log(car);

console.log(luxCar.valueOf());

console.log(Object.keys(luxCar));

// doesn't get inherited props from parent
Object.keys(luxCar).forEach(key => {
	console.log(key);
});

// for..in loop includes inherited props as well
for(let key in luxCar){
	console.log(key);
}


function Animal (species){
	this.species = species;
	this.eats = true;
}

Animal.prototype.walks = function (){
	return `A ${this.species} is walking.`;
};

const bear = new Animal('bear');

console.log(bear.species);

