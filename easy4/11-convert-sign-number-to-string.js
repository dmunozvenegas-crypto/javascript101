


/*In the previous exercise, you 
 developed a function that converts 
 non-negative numbers to strings. 
 In this exercise, you're going to extend
 that function by adding the ability to 
 represent negative numbers as well.

Write a function that takes an integer
and converts it to a string representation.

You may not use any of the standard conversion 
functions available in JavaScript, such as 
String() and Number.prototype.toString(). You may, 
however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.
*/
/*console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");*/

const ARRAY_OF_POSSIBLE_NUMBERS = ["0","1","2","3","4","5","6","7","8","9"];

const signedIntegerToString = (num) => {
	let result = "";
	if(Math.sign(num) !==0) {

	while(num > 0){
	let remain = num % 10;
	num = Math.floor(num/10)
	let str = ARRAY_OF_POSSIBLE_NUMBERS[remain];
        result = str + result
	}
	}
	else {
		
                let str = ARRAY_OF_POSSIBLE_NUMBERS[num];
		result = str + result
	}
	return result
}
const signedIntegerToString2 = (num) => {
	// flag 
	let sign = "+"
	if(Math.sign(num) === -1){
		sign = "-"
		num = Math.sign(num) * num
		return sign + signedIntegerToString(num);
			}
	else if( Math.sign(num) ===1) {
		return sign + signedIntegerToString(num);
			}
	else if( Math.sign(num) ===0) {
		return signedIntegerToString(num);
	}

}



//console.log(signedIntegerToString(1233));
// make sure check for - & + sign 
// return - if includes
console.log(signedIntegerToString2(4321) === "+4321");
console.log(signedIntegerToString2(-123) === "-123");
console.log(signedIntegerToString2(0) === "0");

/*
function degToRad(degrees) {
	return degrees * (Math.PI / 180);
}

const degToDeg = ( degrees) => {
	return degrees / (Math.PI / 180);
}
*/
/*
// testing degree conversion 
console.log(degToRad(120));

console.log(degToDeg(120));


//Math.sign 
console.log(Math.sign(-190));
console.log(Math.sign(190));
console.log(Math.sign(0));
*/



