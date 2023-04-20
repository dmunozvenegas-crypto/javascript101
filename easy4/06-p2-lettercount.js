/*
Modify the wordSizes function from the 
previous exercise to exclude non-letters 
when determining word size. For instance, 
the word size of "it's" is 3, not 4.

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
*/

//console.log(string)
//"replace method log " + string.replace("'",""))

const wordSizes = (string) => {
	let fString = string.replace("'", "");
	let eString = fString.replace(".","");
	let dString = eString.replace("!","");
	let hString = dString.replace(",","");
	let word = hString.replace("?", "");
	
	let str = word.split(" ");
	console.log(str)
	let count = {};
	let arrW = [];
	let arrL = [];

	for(let i = 0; i < str.length ; i++) {
		arrW.push(str[i])
		arrL.push(str[i].length)
	}
	if(arrL.length > 1 ) {
	for(const i of arrL){
		count[i] = count[i]? count[i]+1: 1;
	}
	console.log(count)}
	return count;	
}

console.log(wordSizes('Four score and seven.')=={ "3": 1, "4": 1, "5": 2 });
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')== { "3": 5, "6": 3 })
console.log(wordSizes("What's up doc?")== {"2": 1, "3": 1, "5": 1 })
console.log(wordSizes('')== {})
