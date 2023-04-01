/*
Write a function that takes one argument, a positive integer, 
and returns a string of alternating '1's and '0's, always
starting with a '1'. The length of the string should match 
the given integer.
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
*/
/*
*****************************START PEDAC*****************************
---------------------------PROBLEM-----------------------------------

Input: Given 2 strings
Output: Return 1 string


---------------------------RULES--------------------------------------
Explicit:
  - strings are of different lengths

Implicit:
  -

EdgeCases:
      i.e.
      - empty or null or None values
      - zero or negative values

--------------------------MENTAL MODEL---------------------------------
--------------------------EXAMPLES-------------------------------------
--------------------------DATA STRUCTURES------------------------------
--------------------------ALGORITHM------------------------------------
--------------------------CODE WITH INTENT-----------------------------

*****************************END PEDAC*******************************
*/

const stringy = (num) => {
	let str = '';
	for(let i = 1; i<=num; i++) {
		if(i%2===0){
			str+="0"}
		else if(i%2==1) {
			str+="1";
		}
	}
	return str
}




console.log(stringy(6)==="101010");
console.log(stringy(9)==="101010101");
console.log(stringy(4)==="1010");
console.log(stringy(7)==="1010101");
