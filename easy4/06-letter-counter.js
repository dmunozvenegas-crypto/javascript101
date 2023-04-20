/*
Write a function that takes a string 
consisting of zero or more space separated 
words and returns an object that shows 
the number of words of different sizes.

Words consist of any sequence of 
non-space characters.
*/
// First thing to do is get the length of every string
//
// need to track the length of the string then compare it to the other 
// strings if string equals same legnth use a counter that return the total 
// need to return a hashtable 
// hash table that has length as the key and count of them as the value

let str = "Four score and seven.";
let br = str.split(" ")
console.log("Need length of word, track how many words have the same length: \n\t" + br)
let counts = {};
// Array of Keys for word
let arrW = [];
// Array of keys for length 
let arrL = [];
for(let x = 0; x < br.length; x++) {
	arrW.push(br[x]);
	arrL.push(br[x].length);
	//console.log("Array of Words  " + arrW);
	//console.log("Array of word lengths " + arrL) 
	//console.log(arrW)
}
console.log("Array of Words  " + arrW);
// run a loop on the array of objects every time they appear 
// increment the counter by one return the counters after they have 
// fully gone through the array of words to see all the matches 
/*
for( let y = 0; y < arrW.length; y++) {
	console.log(y)
	console.log(arrW[y])
	counts[arrW[y]] = counts[arrW[y]]? counts[arrW[y]] + 1 :1
}
*/
// keep track of the flag once it turns that it is undefined 
// need the flag to return true and exit

for (const num of arrL) {
	console.log("arrL: ")
	console.log("num")
	console.log(num)
	counts[num] = counts[num] ? counts[num] +1:1;
	console.log(counts[num])
}
console.log(counts)
/*
for(let i = 0; i < br.length; i++ ) {
	arr+= [br[i]]
	console.log(arr)
	}

console.log(arr[0])
for (a in arr) {
	console.log(arr[a])
}
*/

/*
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
*/  
