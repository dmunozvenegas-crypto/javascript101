/*Write a program that solicits six numbers 
from the user and logs a message that 
describes whether the sixth number appears among the first five numbers.
*/
// if number sixth on numberList output result with last number being in the 
// Code here 
// mental thought. 
// First ask the user for input of six numbers. 
// store number in an array data structure 
// iterate through numberlist 
// store the current value to a variable compare it to the current 
// value being iterated over 
// if number match store them into an empty list 
// return empty list of matched numbers.
// return number list as string with joing methdo after 
// transform into integer.


//intialize with a default constructor
const input = () => {
	
	let rly = require('readline-sync');
	let initial = Number( rly.question("Please Enter range for you list of numbers: "));

	let numberList = []; 
	while( numberList.length < initial) {
		let temp2 = Number(rly.question("Enter Your number: "));
		numberList.push(temp2);
	}
	return numberList ;
}
let user = input();
console.log(user);

const search = () => {
	let numberList = input();
	let last = numberList[numberList.length -1];
	let string = numberList.join(" ");
	for( let i = 0; i < numberList.length; i++ ) {
	if(last === numberList[i]){
	     return "The number " + last + " appears in " + string + ".";
		}
	}
	return "The number " + last + " does not appear in " +  string + "." ;
}
console.log(search());
// testing comparison
/*
let dummy = [1,2,3,4,5,6,7,2,3];
let s = dummy[dummy.length-1];
let string = dummy.join(" ");
console.log(string);
for(let j = 0; j < dummy.length; j++){
	console.log(s)
	console.log(dummy[j])
	if(s === dummy[j]){
		console.log( "The number " + s + " appears in " + string);
		break
	}
	console.log("The number " + s + " does not appear in " + string) 

}
*/



// Test user Input 
/*

let rely = require('readline-sync');

let testUser = rely.question("Please enter a number: ");
console.log(testUser);
*/

/* Example of output 
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/
