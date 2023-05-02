/* Write a function that takes two arrays 
 * as arguments and returns an array containing 
 * the union of the values from the two. There 
 * should be no duplication of values in the returned 
 * array, even if there are duplicates in the original 
 * arrays. You may assume that both arguments will always be arrays.
 *
 *union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9] *
 *
 *
 *
 */


const union = (arr1, arr2) => {
	let result = [];

	for(let i = 0; i < arr1.length; i++) {
		result.push(arr1[i]);
	}
	for(let x = 0; x < arr2.length; x++) {
		if(!result.includes(arr2[x])){
		result.push(arr2[x])
		}
		else{
			continue
		}
	}
	return result;
}
console.log(union([1, 3, 5], [3, 6, 9]))



