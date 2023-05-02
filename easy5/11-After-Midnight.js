/*The time of day can be represented as 
 * the number of minutes before or after 
 * midnight. If the number of minutes is 
 * positive, the time is after midnight. 
 * If the number of minutes is negative, 
 * the time is before midnight.

Write a function that takes a time using 
this minute-based format and returns the 
time of day in 24 hour format (hh:mm). Your 
function should work with any integer input.

You may not use javascript's Date class methods.
console.log(timeOfDay(0) === "00:00"); 12:00am
console.log(timeOfDay(-3) === "23:57");  11:57pm
console.log(timeOfDay(35) === "00:35");  12:35am
console.log(timeOfDay(-1437) === "00:03"); 12:03 pm
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
*/
// we know that ever hour consists of 60 minutes 

const format = (num) => {
	if(num === 0 ){
	console.log("00:00")
	}
	else if(num>0) {
	}
}



const timeOfDay = () => {
}

console.log(60*24)
console.log(60*-24)

console.log((-4231%1440/1000).toFixed(0))


let minutes = (-4231/1440).toFixed(1)*10




