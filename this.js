// this
/*
- reference to current object
- keep code modular and flexible

<button onclick="console.log(this)">Click me</button> 
//Output: <button>Click me</button>

*/


console.log(this); // in browser refer to Window, in node or strict mode undefined

function hello() {
	console.log('hello');
	console.log(this);
}

hello();


const myObj = {
	name: 'Yusuf',
	sayName(){
		console.log(this.name);
	}
}
myObj.sayName(); // Yusuf

function Person(name, age) {
	this.name = name;
	this.age = age;
}

const person1 = new Person('John', 48);
console.log(person1);



// Arrow function context

const myObj2 = {
	name: 'Jane',
	sayHello: () => {
		//this.name = 'Muhammad';
		console.log(this.name); // this will not get 'Jane' when function defined as arrow function
	}
};

myObj2.sayHello(); // undefined