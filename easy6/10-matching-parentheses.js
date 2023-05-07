/*Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
 console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false); 
*/

// need to run a loop that checks if the number of paranthesis is the same make sure to have counters for both parenthesis you can easily do this with having two counters that compares them 
// if they are the same then make sure to return true or else return false 
// must have a way to catpure the current sequence of par
// if not catch in the right order must return false otherwise it is true
//// empty array will be in charge of catching 
	// current order then we need to be able to retrieve it and compare it to
	// what the order needs to be else must return false and fail 
const isBalanced = (str) => {
	let arr = str.split("")
	let front = 0;
	let back = 0;
	let flag = false;
	let seq = ""
	let front2 = "";
	let back2 = "";
	for( let x = 0; x < arr.length; x++ ) {
		if(arr[x] === "(" ) {
			front += 1;
			seq += arr[x]
			front2 += arr[x]
		}
		else if( arr[x] === ")") {
			back += 1;
			seq += arr[x]
			back2 += arr[x]
		}
		
	}
	let correct = front2 +back2;
	
	if(front === back && correct === seq) {
		flag = true;
	}
	else{
		flag = false;
	}
        
	return flag;
}

console.log(isBalanced("What (is) this?") === true);
console.log("**********************************")
console.log(isBalanced("What is) this?") === false);
console.log("**********************************")
console.log(isBalanced("What (is this?") === false);
console.log("**********************************")
console.log(isBalanced("((What) (is this))?") === true);
console.log("**********************************")
console.log(isBalanced("((What)) (is this))?") === false);
console.log("**********************************")
console.log(isBalanced("Hey!") === true);

console.log("**********************************")
// last test cases need to check for the seq
console.log(isBalanced(")Hey!(") === false);

console.log("**********************************")
console.log(isBalanced("What ((is))) up(") === false); 
