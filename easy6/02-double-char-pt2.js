/*Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
 doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // "" 
a, e, i, o, and u
*/

// need to check if the letter is one of the following words then do no double the word just add it to the new string that you are making up with the iteration of the loop other wise make sure to 
// If does not equal one of those words then double the word when being added to the new string 
// you can do this by having one if statment that checks for all these words all at once 
// for example the sudo code should look something like this 
// if( current word is not equal to the this a,e,i,o,u," " then do not double the word else make sure to double the word immediatley 

const doubleConsonant = (str) => {
	let result = "";
	for( let i = 0; i < str.length; i++ ) {

		if( result[result.length -1] === "a" || result[result.length -1] === "e" || result[result.length -1] === "i" || result[result.length -1] === "o" || result[result.length-1] === "u" || result[result.length -1] === "-" || result[result.length-1] === "!" || result[result.length -1] === " ") {
			
			result += str[i];
			console.log("False " + result)
		}
		else {
			result += str[i] + str[i];
			console.log("True " + result)
		}
	} 
	console.log(result)
}
const doubleConsonants = (str) => { 
	let r = "";
	for(let z = 0; z < str.length; z++) {
		if( str[z] === "i" || str[z]=== "e" || str[z] === "o" || str[z] === "-" || str[z] ==="u" || str[z] ===" " || str[z] === "4" || str[z] ==="!"){
			r += str[z]
		}
		else{
			r+= str[z] + str[z]
		}
	}
	return r
}
console.log(doubleConsonants('String')=== "SSttrrinngg")
console.log(doubleConsonants('Hello-World!')==="HHellllo-WWorrlldd!")
console.log(doubleConsonants('July 4th')==="JJullyy 4tthh")
console.log(doubleConsonants('')=== "")
