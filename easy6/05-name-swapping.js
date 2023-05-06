/*Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.
 
swapName('Joe Roberts');    // "Roberts, Joe"
 */
const swapName = (str) => {
	let arr = str.split(" ")
	let arrL = arr.length
	let a = [];
	for( let x = 0; x < arrL; x++){
	
		a += arr.pop() + ", ";
	}
	let arrM = a.split("")
	
	arrM.pop();
	arrM.pop();
	let result = arrM.join("")
	return result 
}

console.log(swapName("Joe Roberts")==="Roberts, Joe")

