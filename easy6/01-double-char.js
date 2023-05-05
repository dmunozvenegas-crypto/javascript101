/*Write a function that takes a string, doubles every character in the string, and returns the result as a new string.
 *repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // "" *
Organization 
Effective communication skills
Probleming solving skills
Comfortable Making hard decisions 
Enjoy Data 
efficient at Multitasking 
Empathetic 
Strong Ethics
Love learning and quick learner
Attention to Details
Take Risks 
Time Management and self discipline
TrustWorthy
*/

const rep = (str) => {
	let current = "";
	for( let i = 0; i < str.length; i++){
		console.log("Current letter")
		console.log(current[current.length-1])
		if( current[current.lenght-1] === str[i]) {
			continue
					}
		else if( current[current.length-1] !== str[i]){

			current += str[i]
		}
	}
	console.log(current)
}
const repeat = (str) => {
	let result = "";
	for(let x = 0; x < str.length; x+=2) {
		result += str[x]
	}
}
         // "" 
// Solution

const repeater = (str) => {
	let result = "";
	for(let i = 0; i < str.length; i++) {
		if(result[result.length-1] !== str[i] ||result[result.length-1] === str[i]) {
			result += str[i] + str[i]
		}
	}
	console.log(result)
}
repeater("Hello"); // "HHeelllloo"
repeater("Good job!"); // "GGoooodd  jjoobb!!"
repeater(""); // ""
