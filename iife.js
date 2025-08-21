// IIFE immediately invoked function expression


// Why IIFE

/*
	- avoid polutiong global scope, var declared inside an IIFE are not accessible from the outside
 	- Encapsulation - used to create private scope for vars and functions
 	- Module pattern - used to simulate modular code before import/export existed
 	- initialize value immediately, you can compute and assign right way 
	


	REAL TIME USE


	one time config setup

*/


// since it's an IIFE it will immediately be invoked and print 'Initial count 0'


const privateCounter = (() => {
	let count = 0;
	console.log(`Initial count ${count}`);
	return () => { count += 1; console.log(count);}
})();


privateCounter();
privateCounter();
privateCounter();




// EX Closure using IIFE


const credits = ((num)=>{
	let credits = num;
	console.log(`Initial credits ${credits}`);
	return {
		play: (c) => credits -= c,
		addCredits: (c) => credits += c,
		available: () => console.log(`Available credits ${credits}`)
	}

})(100);


credits.play(10);
credits.available();
credits.addCredits(20);
credits.available();



const config = (() => {
	const env = "production";
	const url = env === "production" ? "https://api.prod.com" : "http://localhost";
	return {env, url};
})();

console.log(config);

console.log(config.env);

