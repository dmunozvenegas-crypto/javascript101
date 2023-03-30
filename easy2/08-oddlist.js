
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
/*

Write a function that returns an Array that
contains every other element of an Array that
is passed in as an argument. The values in the
returned list should be those values that are
in the 1st, 3rd, 5th, and so on elements of the argument Array.
*/
const oddities = (array) => {
	let temp = [];
	for(let i = 0; i< array.length; i += 2){
		temp.push(array[i]);
	}
	return temp;
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
