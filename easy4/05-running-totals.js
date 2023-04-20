/*Write a function that takes an 
array of numbers and returns 
an array with the same number 
of elements, but with each 
element's value being the 
running total from the original array.
*/
// first thing that needs to be done is run a loop through the array
// you can keep a number that keeps track of current being added to it
// every time it gets added the new value gets appended to the new array that will contain
// the new runnning numbers
const runningTotal = (arr) => {
	let currentValue = 0;
	let result = [];
	for(let i = 0; i < arr.length; i++){
		currentValue += arr[i];
		result.push(currentValue)
	}
	console.log("result: " + result)
	return result;
}


console.log(runningTotal([2, 5, 13])===[2, 7, 20]);
console.log(runningTotal([14, 11, 7, 15, 20])=== [14, 25, 32, 47, 67]);
console.log(runningTotal([3])===[3]);
console.log(runningTotal([])===[]);

