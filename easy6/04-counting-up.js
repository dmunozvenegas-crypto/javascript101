/*Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
]*/

const sequence = (number) => {
	let arr = []
	for( let i = 1; i <= number; i++){
		arr.push(i)
	}
	return arr
}

console.log(sequence(5))
console.log(sequence(3))
console.log(sequence(1))



