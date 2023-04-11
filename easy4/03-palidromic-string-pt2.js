/*Write another function that returns 
 * true if the string passed as an 
 * argument is a palindrome, or false 
 * otherwise. This time, however, your 
 * function should be case-insensitive, 
 * and should ignore all non-alphanumeric 
 * characters. If you wish, you may simplify 
 * things by calling the isPalindrome 
 * function you wrote in the previous exercise.
 *
 */

// check 

const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);


const isRealPalindrome = (str) => {
	let pal = "";
	for(let i = str.length -1; i >= 0; i--) {
		pal += str[i];
	}
	if(str.toLowerCase() === pal.toLowerCase() &&  isAlphaNumeric(pal.toLowerCase())=== isAlphaNumeric(str.toLowerCase())){
		return true;
	}
	return false;
}
console.log(isRealPalindrome('madam')===true);
console.log(isRealPalindrome('Madam')===true); 
console.log(isRealPalindrome("Madam, I'm Adam")===true);
console.log(isRealPalindrome('356653')=== true);
console.log(isRealPalindrome('356a653')=== true);
console.log(isRealPalindrome('123ab321')===false);


