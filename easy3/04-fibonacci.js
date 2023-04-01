const findFibonacciIndexByLength = (num) => { 
	if(num <= 2){
		return 1
	}
	
		return findFibonacciIndexByLength(num - 1) + findFibonacciIndexByLength(num - 2);
		
	
}
	


/*
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;
*/

console.log(findFibonacciIndexByLength(6));

//First test case needs to pass is that it returns the number 
// 1 if number is less than number 2 if
// else statement if greater then 2 then I need it to call the function and n-1 + n-2 
//
// The last example may take a minute or so to run.
