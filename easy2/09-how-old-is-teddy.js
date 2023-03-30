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

Build a program that randomly generates Teddy's age,
and logs it to the console. Have the age be a random
number between 20 and 120 (inclusive).
*/

const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	return "Teddy is " + Math.floor(Math.random() * (max -min) + min) + " yeards old!";
}

console.log(getRandomInt(20,120));
