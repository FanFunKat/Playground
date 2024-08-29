// Closure
// a function with acces to its own private variables

let birds = 3;

function dogHouse() { //outer function
	let dogs = 8;
	function showDogs() { //inner function
		console.log(dogs); // 'dogs' is visible in inner function like a global variable
	}

	//console.log(birds); // 3
	//console.log(dogs); // 8

	return showDogs; // return the inner function
}

//console.log(birds); // 3
//console.log(dogs); // undefined


let getDogs = dogHouse(); // assign the inner function to a variable
getDogs(); // call the inner function = 8

// function outerFunction() {
//   let someCount = 0;
//   function unnerFunction(){
//     someCount++;
//     console.log('Called' + someCount + 'times');
//   }
//   return innerFunction;
// }
// counter1 = outerFunction();
// counter2 = outerFunction();
// counter1(); // Called 1 times
// counter2(); // Called 1 times