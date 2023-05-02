/*Write a function that takes one argument, an 
 * array of integers, and returns the average of 
 * all the integers in the array, rounded down to 
 * the integer component of the average. The array 
 * will never be empty, and the numbers will always 
 * be positive integers
 average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40 
*/ 

const average = (arr) => {
	let result = 1;
	for( let x = 0; x < arr.length; x++) {
		result += arr[x];
	}
	return Math.floor(result/arr.length)
}

console.log(average([1, 5, 87, 45, 8, 8])===25);

console.log(average([9, 47, 23, 95, 16, 52])===40);







