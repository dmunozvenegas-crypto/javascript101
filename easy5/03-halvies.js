/*
Write a function that takes an 
array as an argument and returns
an array that contains two elements, 
each of which is an array. Put the first
half of the original array elements in the 
first element of the return value, and put
the second half in the second element. 
If the original array contains an odd number of 
elements, place the middle element in the first half array.


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]


*/


const halvsies = (arr) => {
	console.log("logging complete Array:\n" +  arr)
	//console.log("logging 0-4 index:\n" +  arr.splice(0,4));
	
	let half = Math.ceil(arr.length/2)
	console.log(half)

	
	let midP =  arr.splice(0,half);
      
	let result = [midP,arr]
	console.log(result)
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]



halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]



halvsies([5]);                // [[5], []]



halvsies([]);                 // [[], []]



