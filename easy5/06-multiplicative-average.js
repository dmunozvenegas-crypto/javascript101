/*Write a function that takes an array 
 * of integers as input, multiplies all 
 * of the integers together, divides the
 * result by the number of entries in the 
 * array, and returns the result as a string
 * with the value rounded to three decimal places
 *
 *
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
*/

const multiplicativeAverage = (arr) => {
	let size = arr.length;
	let result = 1;
	for(let x = 0; x < arr.length; x++) {
		result *= arr[x];
	}
	let temp = (result/size).toFixed(3)
	return temp.toString();
}

console.log(multiplicativeAverage([3,5]) === "7.500")


console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])==="28361.667")

