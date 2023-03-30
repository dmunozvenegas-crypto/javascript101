/*Write a function that takes a string 
argument and returns a new string that
contains the value of the original string
with all consecutive duplicate characters
collapsed into a single character.
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

const crunch = (str) => {
	let temp = '';
	for(let i = 0; i < str.length; i++) {
		if(str[i] !== temp[temp.length -1]){
			temp += str[i]
		}
		
	}
	return temp;
}

console.log(crunch('ddaaiillyy ddoouubbllee')=== "daily double");
console.log(crunch('4444abcabccba')==="4abcabcba");
console.log(crunch('ggggggggggggggg')==="g");
console.log(crunch('a')==="a");
console.log(crunch('')=== "");


