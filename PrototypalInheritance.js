const animal = {
	eat(){
		console.log("eating");
	}
};


const dog = Object.create(animal);
dog.bark = function () {
	console.log("barking");
};


const duck = Object.create(animal);
duck.quack = function (){
	console.log("quack");
};


dog.eat();
dog.bark();
duck.eat();
duck.quack();

console.log(dog.__proto__ === animal); // true
console.log(duck.__proto__);
console.log(animal.__proto__ === Object.prototype); // true
