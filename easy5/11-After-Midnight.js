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
	return num < 10? "0" +num: num;
}

const getMinutes = (num) => {
	while(num<0) {
		num = 60 + num;
	}
	return num % 60;
}

const getHours = (num) => {
	while(num<0) {
		num = 1440 + num;
	}
	let result = Math.floor(1440 + num/ 60);
	return result%24;
}
const timeOfDay = (num) => {
	let minutes = getMinutes(num);
	let hours = getHours(num);
	let result = format(hours) + ":" + format(minutes)
	return result
}
console.log(format(10))
console.log(format(1))
console.log(format(9))
console.log(format(17))
console.log("*****************************\nHours")
console.log(getHours(0))
console.log(getHours(-3))
console.log(getHours(35))
console.log(getHours(-1437))
console.log(getHours(3000))
console.log(getHours(800))
console.log(getHours(-4231))

console.log("*****************************i\nMinutes")
console.log(getMinutes(0))
console.log(getMinutes(-3))
console.log(getMinutes(35))
console.log(getMinutes(-1437))
console.log(getMinutes(3000))
console.log(getMinutes(800))
console.log(getMinutes(-4231))
console.log("*****************************i\nTime Of Day")


console.log(timeOfDay(0) === "00:00"); 
console.log(timeOfDay(-3) === "23:57");  
console.log(timeOfDay(35) === "00:35"); 
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");



