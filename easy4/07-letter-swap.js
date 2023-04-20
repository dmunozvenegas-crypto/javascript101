/*
 Given a string of words 
 separated by spaces, write 
 a function that swaps the 
 first and last letters of every word.

You may assume that every 
word contains at least one 
letter, and that the string will 
always contain at least one word. You 
may also assume that each string contains 
nothing but words and spaces, and that 
there are no leading, trailing, or repeated spaces.

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

we want to switch the first and last element 












*/











let dummy = "Ab cde";

if(!dummy.includes(" ")){
	console.log("true")
}





const swap = (str) => {
	// include all variables needed to get function runningi
	let result = [];
	if(!str.includes(" ")){
		// here we want to capture e
		let testSplitted = str.split("")
		let captureLast = testSplitted.pop();
		// we need to reverse the string to remove 
		let temp = " "
		for(let x = testSplitted.length-1 ; x >= 0; x--){
		temp+= testSplitted[x];
		}
		let tempSplitted = temp.split("");
		let captureFirst = tempSplitted.pop();
		// now time to put it all together 
		// // first swap 
		testSplitted.push(captureFirst);
		// second swap 
		testSplitted[0] = captureLast;
		 
		result.push(testSplitted.join(""));
	}
	else{
		let test2Splitted = str.split(" ");
//will capture ending value before returning as string
		let temp2 = "";
		let captureLast = "";
		let captureFirst = "";
		for(let z = 0; z < test2Splitted.length; z++){
			captureLast = test2Splitted[z].charAt(test2Splitted[z].length -1);
			captureFirst = test2Splitted[z].charAt(0);
			temp = test2Splitted[z].split("")
			temp.pop()
			temp.push(captureFirst)
			temp[0] = captureLast;
			let temp2 = temp.join("")
			result.push(temp2)
		}
	}
	return result.join(" ");
}

console.log(swap('Oh what a wonderful day it is')==="hO thaw a londerfuw yad ti si")
console.log(swap('Abcde')==="ebcdA")
console.log(swap('a')=== "a")





/*
let dummytest = ("dummy test equal") 
flag = " ";
if(dummytest.includes(flag)){
	console.log("True")
}

*/

// main check would be to see if it has spaces if it does then the way you split is different after that its all
// all the same like handling individual values 


// when refactoring the code make 
// sure to use one if statement 
// transform original input twice






// helper function that will take care of checking the length of is one if not 
// then split different
// the solution needs to check if its one single word or two words 
// first function take care of how to the word splits if length is more then one 
// first function needs to check for spaces if there are spaces then split by spaces if it is just one word then 
// split by spaces 
// split further down is there are more then one 
// then split by a space
// once it is done make sure to split by by no space but by individual characters 
// check for 
/*
const splitlogg = (word) => {
	let temp = "";
	for(let i = 0; i < word.length; i++){
		
	if(word[i] ===" "){
		console.log(word[i])
		console.log("True")
		
		temp = word.split(" ");
	}
		else if 

	}
	return temp
}

let s1 = "Abcde"

let s2 = "Oh what a wonderful day it is"

let dummy = splitlogg(s1)
console.log(dummy)

let dummy2 = splitlogg(s2)
console.log(dummy2)
*/




/*

let test = "a";
// here we want to capture e
let testSplitted = test.split("")
let captureLast = testSplitted.pop();
console.log("CurrentValuesLeft: " + testSplitted)
console.log("Captured: " + captureLast)

// we need to reverse the string to remove 
let temp = " "
for(let x = testSplitted.length-1 ; x >= 0; x--){
	console.log(testSplitted[x])
	temp+= testSplitted[x];
}
console.log("String Reversed: " + temp);
let tempSplitted = temp.split("");
let captureFirst = tempSplitted.pop();
console.log("Captured First: " + captureFirst);

// now time to put it all together 
console.log("Current Values testSplitted: " + testSplitted);
// first swap 
testSplitted.push(captureFirst);
console.log("Current values testPlitted After first Swap: " + testSplitted)
// second swap 
testSplitted[0] = captureLast;
console.log("Current value testSplitted After Second swap: " +testSplitted)
*/

// main check would be to see if it has spaces if it does then the way you split is different after that its all
// all the same like handling individual values 


// when refactoring the code make 
// sure to use one if statement 
// transform original input twice





















		//Solution part 2
/*

let test2 = "Oh what a wonderful day it is"

let test2Splitted = test2.split(" ");
console.log(test2Splitted)
//will capture ending value before returning as string

let result = []
let temp2 = "";
let captureLast = "";
let captureFirst = "";
for(let z = 0; z < test2Splitted.length; z++){
	console.log(test2Splitted[z])
	captureLast = test2Splitted[z].charAt(test2Splitted[z].length -1);
	captureFirst = test2Splitted[z].charAt(0);
	console.log("Captured First: " + captureFirst)
	console.log("Captured Last: " + captureLast)
	temp = test2Splitted[z].split("")
	console.log("Temp variable splits word further: " + temp)
	temp.pop()
	console.log("Temp pop las value: " + temp)
	temp.push(captureFirst)
	console.log("Temp first swap: " + temp)
	temp[0] = captureLast;
	console.log("Temp Second Swap: " + temp)
	let temp2 = temp.join("")
	console.log("Temp After join: " + temp2)
	result.push(temp2)
	//console.log(test2Splitted[z][0] = captureLast);
	//console.log(test2Splitted[z])
	//console.log(test2Splitted)
	// make swaps 
	// First swap is easy so make sure to take care of end swap first 
	//let temp = test2Splitted[z].replace(captureLast,captureFirst)
	//console.log(temp)
	//console.log(test2Splitted[z].charAt(0).replace(captureLast))
	//console.log(test2Splitted[z])
	
	//result.push(test2Splitted[z])
		//console.log(result)


}
console.log(result)


*/

















































/*

let spaces = splitlogg ("Hey diddle diddle, the cat and the fiddle!")
console.log("Spaces splitlogg: " + spaces)

let noSpaces = splitlogg("Abcde");
console.log("no spaces splitlogg : " + noSpaces);
//let spaces = splitlogg("Oh what a wonderful day it is")
const howToSwap = (arr) => {
	console.log(arr)
	if(arr.length >= 1) {
		let popped = arr.pop();
		console.log(popped)
		let hello = arr;

		hello.unshift(popped)
		console.log(hello)
		
	}
}

howToSwap(noSpaces);
howToSwap(spaces);

const swap = (word) => {
	let arr = word.split("")
	console.log(arr)
	//for(let i = 0; i < .length
}
*/
