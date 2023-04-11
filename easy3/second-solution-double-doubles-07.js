const twice = (n) => {
	// got half the string and stored into a variable
	let halfS = n.toString().length/2;

	
        
	if(n.toString().slice(0,halfS) === n.toString().slice(halfS)){
		return n;
	}
	return n*2
	
}

console.log(twice(37)=== 74);
console.log(twice(44)===44);
console.log(twice(334433)===668866);
console.log(twice(444)=== 888);
console.log(twice(107)===214);
console.log(twice(103103)=== 103103);
console.log(twice(3333)=== 3333);
console.log(twice(7676)===7676);
console.log(twice(4545)===4545);
console.log(twice(5454)===5454);
console.log(twice(90909090) ===90909090);
console.log(twice(8903) === (8903*2))
console.log(twice(8080) ===8080);
console.log(twice(8778) ===(8778*2));
console.log(twice(4389) ===(4389*2));
console.log(twice(123) ===(123*2));
console.log(twice(0909) ===(0909));
