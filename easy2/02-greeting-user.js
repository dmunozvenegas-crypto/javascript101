/*
Greeting a user

Write a program that will ask for
user's name. The program
will then greet the user. If the
user writes "name!" then the computer yells back to the user.
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


const greeting = (input) => {
	if(input.endsWith("!")){
		let temp = input.split();
		temp.pop();
		let temp2 = temp.join('');
		return "HELLO" + temp2.toUpperCase() + ". WHY ARE YOU SCREAMING?";
	}
		return "Hello " + input + ".";

}

console.log(greeting("Bob"))
console.log(greeting("Bob!"))

