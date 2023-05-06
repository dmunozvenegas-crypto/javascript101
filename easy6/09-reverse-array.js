/*Write a function that takes an Array as an 
 * argument and reverses its elements in place. 
 * That is, mutate the Array passed into this 
 * method. The return value should be the same Array object.

You may not use Array.prototype.reverse().
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
*/

const backwards = (arr) => {
	let temp = arr;
	let result = []
		for(let x = temp.length -1; x >= 0; x--) {
		result.push(temp[x])
	}
	return result;
}

let list = [1,2,3,4] 



// what i need to accomplish is to dump out the values from the original list 
// then i need to add them back into the list
// then return the same list just changed without resturn a whole new list 
// this is the only way for us to get true when we are comparing the arrays 
// otherwise the function will always be false therfore we need to pop and shift it to the front of the list without 

const reverse = (list) => {
	// copy of the original array now we need to iterate over it
	let x = list.slice();
	for( let i = 0; i < x.length; i++) {
		//dump out the values from the original
	let dump = list.pop()
		// now add the current index from the copy 
		// to the original in the beginning 
		list.unshift(x[i])
	}
	return list
}


let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

