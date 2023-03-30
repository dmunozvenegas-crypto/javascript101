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
Write a function that will take a short 
line of text, and write it to the console log within a box.


*/
const logInBox = (str) => {
	let d = "- ";
	let sB = "|";
	let eB = "|";
	let em = " ";
	if(str.length > 0){
		return "+" + (d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d)+ "+\n" +sB+(em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em)+eB+"\n" +sB +" "+ str+"  " +eB+"\n"+sB + (em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em+em)+eB+"\n+" + (d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d+d) + "+";
	}
	else{
		return "+" + "--" + "+\n" + sB + "  " + eB + "\n" + sB + "  " +  eB + "\n" + sB + "  " +  eB + "\n+" + "--" + "+";
	}
}

console.log(logInBox(""));
console.log(logInBox("To boldly go where noe one has gone before."))

