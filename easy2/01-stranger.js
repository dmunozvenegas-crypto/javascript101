/*
*****************************START PEDAC*****************************
---------------------------PROBLEM-----------------------------------

Input: 1 array & 1 object
Output: Return 1 string


---------------------------RULES--------------------------------------
Explicit:
  - array and object 

Implicit:
  -

EdgeCases:
      i.e.
      - empty or null or None values: No 
      - zero or negative values: No 

--------------------------MENTAL MODEL---------------------------------
create const function that takes two inputs an array and object.
after transform the array into a string.
make sure to pull the desired keys from the object 
then return a string that combines the array string and the values of 
key from the object
--------------------------EXAMPLES-------------------------------------
function = (array, object) => {
return arraystring + objectkey + objectkey}
array =["dave", "mello", "silly"]
arraystring = "dave mello silly" 
object = {title: "lifter", occupation: "trainner"}
objectkey = object.title
objectkey = object.occupation

--------------------------DATA STRUCTURES------------------------------
String, array, object
--------------------------ALGORITHM------------------------------------
-create a const array function that takes an array and object
-- return a string 
  -- string being returned needs to array as concatenated string and 
  -- concatenate the object by keys to get the values from object key
--------------------------CODE WITH INTENT-----------------------------

*****************************END PEDAC*******************************
*/
/*

Create a function that takes 2 arguments, an array and an object.
The array will contain 2 or more elements that, when combined with
adjoining spaces, will produce a person's name.The object will contain
two keys, "title" and "occupation", and the appropriate values. Your 
function should return a greeting that uses the person's full name, and mentions the person's title.
*/

let greetings = (array, object) => {
	return "Hello, " + array.join(" ") + "! " + "Nice to have a " + object.title + object.occupation + " around";
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.




