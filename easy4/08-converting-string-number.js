/*The parseInt() method converts 
 * a string of numeric characters 
 * (including an optional plus or 
 * minus sign) to an integer. The 
 * method takes 2 arguments where 
 * the first argument is the string 
 * we want to convert and the 
 * second argument should always 
 * be 10 for our purposes. parseInt() 
 * and the Number() method behave similarly. 
 * In this exercise, you will create a function 
 * that does the same thing.

Write a function that takes a string of digits
and returns the appropriate number as an integer. 
You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, 
nor should you worry about invalid characters; 
assume all characters will be numeric.

You may not use any of the standard conversion 
methods available in JavaScript, such as String() 
and Number(). Your function should do this the 
old-fashioned way and calculate the result by 
analyzing the characters in the string.

Examples
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
*/


//Cast the data 




// Notes for problem 
// the first thing you have to think about is
// organizing the string number from smallest decimal
// you turn into an array and reverse it 
// then we run a loop and get the current value and the current index
// once we got those two things then we can figure out 
// how many zeros the number needs to have we do 
// this by multiplying the current value * 10 and figure how many zeros by 
// powering the index 
// we get a whole number with zeros or none if its the first number 
// then we add to the counter it respects the bigger number so we 
// example 
// 4321 => reverse array [1,2,3,4] => current value 1 and index 0 =>
// to get whole number => 1 * 10 ** 0 = 1

// to get whole number => 2 * 10 ** 1 = 20

// to get whole number => 3 * 10 ** 2 = 300

// to get whole number => 4 * 10 ** 3 = 4000
// when put the number together this happens
//counter = 0 + 1 = 1 =>counter = 1 + 20 = 21 =>counter = 21 + 300 = 321 =>counter= 321 + 4000 = 4321
const stringToNumber = (str) => {
	let splitStr = str.split("").reverse();
	console.log(splitStr)
	let result = 0;
	for(let x = 0; x < splitStr.length; x++){
		console.log(splitStr[x])
		console.log(x)
		let product = splitStr[x] * 10 ** x;
	        console.log(product);
		result += product
		}
	return result;

}

console.log(stringToNumber("4321")===4321)

console.log(stringToNumber("570")===570)


