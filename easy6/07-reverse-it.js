/*Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse" 
*/
// first thing that needs to be done is make sure to split the string into an array after you have as array iterate over the array and make sure to send it back into and empty string that will catch it 
// basically iterate backward through the string easy peasy

const reverseSentence = (str) => {
	let arr = str.split(" ");
	console.log(arr);
}

reverseSentence("")
reverseSentence("Hello World") 
reverseSentence("Reverse these Words")
