/*
 
Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
*/
// current index needs to be multiplied by the second integer that you are give the first is the number of times that your loop needs to execute and make sure to start at number one because if you start at number zero your function will fail 

const sequence = (r, m) => {
	let result = [];
	if(r !== 0) {
	for( let i = 1; i <= r; i++){
		result.push(i * m);
		}

	}
	else{
		return result
	}
	return result
}
	

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []


