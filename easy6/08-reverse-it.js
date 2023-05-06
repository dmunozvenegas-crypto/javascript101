/*Write a function that takes a string argument containing 
 * one or more words and returns a new string containing 
 * the words from the string argument. All five-or-more letter 
 * words should have their letters in reverse order. The string 
 * argument will consist of only letters and spaces. Words will 
 * be separated by a single space.
reverseWords('Professional');             // "lanoisseforP"
reversewords('walk around the block');    // "walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
 */
// First we must split the string into an array. Once an array then get the length of each individual element if the 
// element is greater or equal to 5 then we must iterate over the word itself and save it into place holder that will be sent back into  an empty array by pushing it into it 


const reverseWords = (word) => {
	let result = [];
	let arr = word.split(" ")

	for( let i = 0; i < arr.length; i++){
		let cI = arr[i];
	
		
		let s ="";
		if(cI.length >4) {
			for(let x = cI.length -1; x >= 0; x--) {
				
				
				s += cI[x];
			
				
				
			}
			result.push(s)
		}
		else{
			result.push(cI)
		}
		
	}	
	return result.join(" ");
}

console.log(reverseWords('Professional')==="lanoisseforP")


console.log(reverseWords('Launch School')==="hcnuaL loohcS")
console.log(reverseWords('walk around the block')==="walk dnuora the kcolb")


/*
console.log("First\n")
reverseWords('Professional');     
console.log("second\n")
reverseWords('Walk around the block');    
console.log("third\n")
reverseWords('Launch School');   
*/
