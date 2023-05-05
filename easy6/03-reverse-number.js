/*Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
*/

const reverseNumber = (number) => {	
	let str = ""
	let s = number.toString().split("")
	let sLen = s.length
	for( let z = 0; z < sLen; z++) {
		

		str += s.pop()
		
		
	}	
	return Number(str)
}

console.log(reverseNumber(12345)===54321)
console.log(reverseNumber(12213)===31221)
console.log(reverseNumber(456)===654)
console.log(reverseNumber(12000)===21) // -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)===1)
