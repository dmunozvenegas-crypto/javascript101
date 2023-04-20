/* Write a function that returns 
true if its integer argument is 
palindromic, or false otherwise. 
A palindromic number reads the 
same forwards and backwards.
*/

/*
 First thing that needs to be done is tranform the data into a string 
 or keep as an integer and work with it 
 do not 
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
 */
// this function will take care of tranforming the data into a string
// helper function 

const r = (n) => {
	return n.toString();
}
const revW = (str) => {
	let newS = "";
	let temp = r(str);
	for(let i = temp.length -1; i >= 0; i--){
		newS += temp[i];
	}
	let numTemp = Number(temp);
	let numNewS = Number(newS);
	if(numTemp === numNewS) {
		return true;
	}
	return false;
}

console.log(revW(34543)=== true);

console.log(revW(123210)=== false);

console.log(revW(22)===true);


console.log(revW(5)===true);
