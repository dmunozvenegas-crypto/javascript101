/*Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse" 
*/
// first thing that needs to be done is make sure to split the string into an array after you have as array iterate over the array and make sure to send it back into and empty string that will catch it 
// basically iterate backward through the string easy peasy

// more code to combine this string 
// now lets do this with less code 

const reverseSentence = (str) => {
	let result = "";
	let arr = str.split(" ");
	let arrL = arr.length
	if(str.length > 0) {
		for( let z = 0; z < arrL; z++) {
			result += arr.pop() + " ";
		}
	}
	else{
		return result;
	}
	let s = result.split(" ")
	s.pop()
	
	let t = s.join(" ")
	return t
}
console.log("First Solution ")
console.log(reverseSentence('')==="")
console.log(reverseSentence('Hello World')==="World Hello")
console.log(reverseSentence('Reverse these words')==="words these Reverse")

const reverseSentence2 = (str) => {
	let result = [];
	let arr = str.split(" ")

	for( let i = arr.length -1; i >= 0; i--) {
		result.push(arr[i])
	}
	return result.join(" ")
}
console.log("Second Solution ") 
console.log(reverseSentence('')==="")
console.log(reverseSentence2('Hello World')==="World Hello")
console.log(reverseSentence2('Reverse these words')=== "words these Reverse")





