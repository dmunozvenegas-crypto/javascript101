const stringToInteger = (str) => {
	let result = 0;
	let splitRev = str.split("").reverse();
	//console.log(splitRev);
	for(let x = 0; x < splitRev.length; x++) {
		//console.log(splitRev[x])
		//console.log(x);
		let product = splitRev[x] * 10 ** x
		result += product;
	}
	
		return result
}


const stringToSignedInteger = (str) => {
	let result;
	let flag = 1;
	if(str.includes("-")){ 
		let temp = str.replace("-","");
		flag = -1;
		result = stringToInteger(temp)* flag;
	}
	else if(str.includes("+")){
		let temp = str.replace("+","");
		result = stringToInteger(temp) * flag;
	}
	else{
		result = stringToInteger(str);
	}
	return result;
}



console.log("fist Number" )
console.log(stringToSignedInteger("4321"))
console.log("Second Number ") 
console.log(stringToSignedInteger("-54232"))
console.log("third Number ")
console.log(stringToSignedInteger("+4234"))



console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
// use a flag to mutltiply to output to turn  it negative of postive



