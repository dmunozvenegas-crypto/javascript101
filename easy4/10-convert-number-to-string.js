/*const integerToString = (num) => {
	let str= "";
	str+= num; 
	return str
}
*/

const ARRAY_OF_STRINGS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Solution 1: with gaurd clause
const integerToString = (number) => {
  if (number === 0) return "0";

  let result = "";

  while (number > 0) {
    // remainder
    let remainder = number % 10;
	  console.log(typeof(remainder))

    // quotient
    number = Math.floor(number / 10);
	  console.log(typeof(number))
    // using remainder as index to lookup string value in ARRAY_OF_STRINGS
    let str = ARRAY_OF_STRINGS[remainder];
	  console.log(typeof(str))
    // adding two strings without conversion.
    result = str + result; // note order: str in front of result.
  }

  return result;
};



console.log(integerToString(4321)=== "4321")

/*
console.log(integerToString(0)=== "0")
console.log(integerToString(5000)==="5000")
console.log(integerToString(1234567890)==="1234567890")
*/
