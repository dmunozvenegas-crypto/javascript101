/*Write a function that returns true if 
 the string passed as an argument is a 
 palindrome, or false otherwise. A palindrome 
 reads the same forwards and backwards. 
 For this problem, the case matters and all characters matter.
Will have to have some code that will execute function
The function will one single string that will 
be checked throughly for 
	*/
let dO = "madam";
let dT = "Madam";
let dThree = "madam i'm adam";
let dFour = "356653";
let dFive = "tacodogdogtaco";
const iterate = (str) => {
	// empty string that will take primary string backword to be able to compare them at the end
	let reverseStr = "";
	// may want to check length of the str just in case but will not need to 
	for(let i = 0; i < str.length; i++) {
		// code that will iterate through the
		reverseStr += str[str.length-i];
	}
	return reverseStr;
}
const isPalindrome = (str) => {
	let reverseStr = "";
	for(let j = str.length-1; j >=0; j--){
		reverseStr += str[j];
	}
	if(reverseStr === str) {
		return true;
	}
	return false;
/*
	if(reverseStr.toLowerCase() === str.toLowerCase()){
		console.log(
	}
	console.log(str);
	console.log(reverseStr);
	*/
}



console.log(isPalindrome('madam')===true);

console.log(isPalindrome('Madam')===false); 

console.log(isPalindrome("madam i'm adam")===false);

console.log(isPalindrome('356653')===true);


//console.log(iterateBack("Madam"));

// small function to return one word that wll be used in the next part of the operation 
// first start with a simple return of complete word moving it from one variable to the next 

const w = (string) => {
	let counter = string.length;
	let temp = "";
	while(counter>= 0) {
		temp += string[counter]
		counter -= 1;
	}
	return temp;
}
//console.log(w("MadaM"))

/*
console.log(iterate(dO));
console.log(iterate(dT));
console.log(iterate(dThree));
console.log(iterate(dFour));
*/	
/* __________________________________________________________
 * Test cases to check for after the function has been written
 * ----------------------------------------------------------

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
*/
