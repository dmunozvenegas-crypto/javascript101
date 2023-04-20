const wordSizes = (str) => {
	let arr = str.split(" ");
// Word Count Object
	const counts = {};
	// array of keys
	let arrW = [];
	// array of keys length
	let arrL = [];
	
	for(let x = 0; x < arr.length; x++) {
	arrW.push(arr[x]);
	arrL.push(arr[x].length)
	}
	if(arrL.length > 1){
		for(const num of arrL) {
		/*
		 * console.log("num")
		console.log(num)
		console.log("counts[num]")
		console.log(counts[num])
		if(counts[num] === counts[num]){
			console.log("True");
			counts[num]= counts[num] +1
		}
		else if(counts.length== {}){
			console.log("false");
			counts[num] = 0;
		}
		*/
		counts[num] = counts[num]? counts[num]+1:1 ;
	}
		return counts
	}
	return counts
}
// need to check for the folowing test that if the array is empty return an empty array


console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));//{ "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));// { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));  // {}
