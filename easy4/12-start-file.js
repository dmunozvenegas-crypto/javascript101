// the following function will take in a string and spit out 
// the string converted into a string without using one of the methods given form js
const algo = (str) => {
	console.log(str)
	let result = 0;
	let con = str.split("").reverse()

	if(str ==="0"){
		return 0;
	}
	for( let i = 0 ; i < con.length; i++){
		let cv = con[i];
		let ci = i;
		let p = cv * 10 ** ci;
		result += p;
	}
	return result;
}
console.log("Passed all tests: ")
console.log(algo("12345")===12345);
console.log(algo("0")===0);
console.log(algo("34523") ===34523);
console.log(algo("890987")===890987);
console.log(algo("789421")=== 789421);
// write a function that takes an a str returns a number with the sign that
// is in the front of it is a - else return just the regular number 
const algoSign = (str) => {
	
	if(str.includes("-")){
		let minusSign = str.replace("-","");
		console.log(minusSign);
		return algo(minusSign);
	}
	else if(str.includes("+")){
		let plusSign = str.replace("+","")
		return algo(plusSign)
	}
	else {
		return algo(str)
	}
}

console.log("AlgoSign")
console.log(algoSign("-12234"));
console.log(algoSign("-97988798"));
console.log(algoSign("809809"));
console.log(algoSign("883657"));
console.log(algoSign("325235"));
console.log(algoSign("0"));





