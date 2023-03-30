
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
Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
*/

const operation = (num, num2) => {
	console.log("Enter the first number: ") 
	console.log(num)
        console.log("Enter the second number: ")
	console.log(num2)
        console.log(num + num2)
        console.log(num - num2)
        console.log(num * num2)
        console.log(Math.round(num / num2))
        console.log(num % num2)
        console.log(num**num2)
}

operation(23, 17)
