// lexical scope defines how var names are resolved in nested functions

// nested child function have access to the scope of their parent functions

// closure is something related and that create a lot of confusion




// LEXICAL SCOPE:
/*
	lexical scope means that the scope of var is determined by their physical location in the source code
	at compile time, not at run time

in simple term
	"Where a var is defined in the code determines where it can be accessed"

	nested function will have access to the outer function vars because nested function is defined inside outer 
	function


	IDEA - nested function accessing parent var
	
*/

// LEXICAL SCOPE

function outer(){
	const out = "I', from outer";

	function inner(){
		console.log(out);
	}

	inner();
}

outer();



// CLOSURE
/*

	Definition:

	A closure is a function that remembers it's lexical scope even when it is executed outside of that scope

	Function that remember it;s environment

	IDEA - returned function still accessing parent var

*/




// CLOSURE - you must return nested function that remembers parent function's vars

function counter(){

	let count = 0;

	//return () => { count += 5; console.log(`Current Count: ${count}`)};

	return {
		increment: () => count += 1,
		decrement: () => count -= 1,
		getCount: function (){
			return count;
		}
	};

}

const myCounter = counter();

myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(`Current count ${myCounter.getCount()}`);
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
console.log(`Current count ${myCounter.getCount()}`);

