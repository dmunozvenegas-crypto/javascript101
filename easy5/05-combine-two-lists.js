/* Write a function that combines two 
 * arrays passed as arguments, and returns
 * a new array that contains all elements from 
 * both array arguments, with each element taken in alternation.

You may assume that both input arrays are 
non-empty, and that they have the same number of elements.

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
*/

const interleave = (arr, array) => {
	let temp = arr.length + array.length;
	console.log(temp);
	let revArr = arr.reverse();
	let revArray = array.reverse();
	let result = [];
	console.log(revArr)
	let counter = 1;
	let counterT = 1;
	for(let x = 0; x < temp; x++) {
		console.log(x)
		
		if(x % 2!==0){
			result.push(revArray[revArray.length - counter])
			counter += 1
		}

		else  if(x %2===0){ 
			result.push(revArr[revArr.length-counterT])
			counterT += 1
		}
		
	}
		return result;
}




console.log(interleave([1, 2, 3], ["a", "b", "c"]))  //==[1, "a", 2, "b", 3, "c"])











