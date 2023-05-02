/*Write a function that takes two array 
arguments, each containing a list of numbers, 
and returns a new array that contains the product 
of each pair of numbers from the arguments that 
have the same index. You may assume that the 
arguments contain the same number of elements.
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
*/


const multiplyList = (arr, array) => {
	let result = [];
	for( let i = 0; i < arr.length; i++) {
		result.push(arr[i] * array[i])
	}
	return result;
}


console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
