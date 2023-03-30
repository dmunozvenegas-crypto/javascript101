const xor = (x, z) => {
	if(!!x === true && !!z === false){
		return true;
	}
	else if (!!x === false && z === true){
		return true;
	}
	else {
		return false;
	}
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
