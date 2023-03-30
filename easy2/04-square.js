
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

/*Using the multiply() function from the "Multiplying Two Numbers"
 problem, write a function that computes the square of its
 argument (the square is the result of multiplying a number by itself).
 */

const square = (fun) => {
	return fun**2
}

const multiply = (num, num2) => {
	return num * num2;
}


console.log(square(multiply(1,5)) === 25); // logs true
console.log(square(multiply(-2,4)) === 64); // logs true


