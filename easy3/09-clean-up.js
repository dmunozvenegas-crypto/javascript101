/* 
Given a string that consists of some words and an 
assortment of non-alphabetic characters, write a 
function that returns that string with all of the 
non-alphabetic characters replaced by spaces. If 
one or more non-alphabetic characters occur in a 
row, you should only have one space in the result 
(i.e., the result string should never have consecutive spaces).


cleanUp("---what's my +*& line?");    // " what s my line "

The ASCII code between 48 to 57 is for numeric characters, 97 to 122 is for lowercase alphabetic characters, and 65 to 90 is for uppercase alphabetic characters.
*/


// First thing that needs to be done is compare the output from first index returned.
//
// use a comparison statement to check all requirements for it to return only letters.
// compare that result to the range of numbers.
// return the current index and update with new result if its a letter 
// exception on non alphaalphabetic return add space if or more consective nonalphabetic return

// check what is being returned from charCode
// 

const cleanUp = (word) => {
	let emptyString = "";

	for (let char = 0; char < word.length; char++  ){
		console.log("what is this " + word.charAt(char) );
	let charCode = word[char].charCodeAt(0);
		
		console.log(word.charAt(char));
		console.log("This is a number" + " "  + charCode +  " This is what is compared");
		

	if(!(charCode > 47 && charCode < 58) && !(charCode > 96 && charCode < 123) & !(charCode>64 && charCode <91 )){
		// string is not alphanumeric
		console.log("Should happen");
		console.log("True")
		emptyString += " ";

		console.log(emptyString);
	}
		else {
			console.log("false");
			emptyString += word.charAt(char);

			console.log("Else Result" + emptyString);
		}
	}
	console.log(emptyString);
	console.log("End result");
	return emptyString;
}

console.log(cleanUp("Launch"));

