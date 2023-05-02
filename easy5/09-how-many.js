/* Write a function that counts the number 
 * of occurrences of each element in a given 
 * array. Once counted, log each element alongside 
 * the number of occurrences. Consider the words 
 * case sensitive e.g. ("suv" !== "SUV").

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

const countOccurrences = (arr) => {
	let counterCar = 0;
	let counterTruck = 0;
	let counterSuv = 0;
	let counterMotor = 0;
	for( let i = 0; i < arr.length; i++) {
		if(arr[i] === "car"){
			counterCar +=1;
		}
		else if(arr[i] === "truck") {
			counterTruck +=1;
		}
		else if(arr[i] === "SUV") {
			counterSuv += 1;
		}
		else if(arr[i] === "motorcycle") {
			counterMotor += 1;
		}
	}
	console.log("car => " + counterCar + "\ntruck => " + counterTruck + "\nSUV => " + counterSuv +"\nmotorcycle => " + counterMotor )
}
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
/*car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

