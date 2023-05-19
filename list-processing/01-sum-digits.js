/*Write a function that takes one argument, 
 * a positive integer, and returns the sum of 
 * its digits. Do this without using for, while, 
 * or do...while loops - instead, use a series of 
 * method calls to perform the sum.
 sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45 
*/

const sum = (n) => {
	// first we need to convert the following input into a string 
	let str = n.toString().split("")
	let narr = str.map(x => Number(x));
	let result = narr.reduce((acc, cv) => acc + cv,0);
	return result;
	}

console.log(sum(23)===5);           // 5
console.log(sum(496)===19);          // 19
console.log(sum(123456789)===45);    // 45 






