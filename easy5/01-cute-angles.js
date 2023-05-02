/*Write a function that takes a 
floating point number representing 
an angle between 0 and 360 degrees 
and returns a string representing 
that angle in degrees, minutes, 
and seconds. You should use a degree 
symbol (˚) to represent degrees, a 
single quote (') to represent minutes, 
and a double quote (") to represent 
seconds. There are 60 minutes in a degree, 
and 60 seconds in a minute.
/*dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
*/

/* Let us convert 12.72° into degrees-minutes-seconds.

For this, we first need to take the decimal part for the solution.

0.72° = 0.72 x 60'

= 43.2'

= 43' + (0.2 x 60")

=43'12"

Hence, the converted measure of the angle is 12°43'12"
*/

/* Example for me 
 * 76.73 
 * .73 = .73 *60
 */

// original string will be converted into two strings first
/*
const dms = (num) => {
	let degrees = Math.trunc(76.73) +  "˚";
	let temp = num.toString().split(".");
	let minutes = temp.pop();
	minutes = minutes/100 * 60
	let temp2 = minutes.toString().split("");
	minutes = Math.floor(minutes)
	
	let seconds = temp2.pop();
	
	seconds = (seconds/10 * 60) + '"'

	return degrees + minutes + "'" + seconds
	
}

console.log(dms(30))
console.log(dms(76.73));        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
*/
function decimalConverter(num) {
  return (num % 1) * 60;
}

function formatNum(num) {
  return num < 10 ? `0${num}` : num;
}

const dms = (num) => {

  let degrees = Math.floor(num);

  let minutes = Math.floor(decimalConverter(num));
	console.log(minutes)
  let seconds = Math.floor(decimalConverter(decimalConverter(num)));

  return `${degrees}\u00B0${formatNum(minutes)}\'${formatNum(seconds)}\"`;
};

/*
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
*/

// First function gets the 
const decimal = (num) => {
	return num % 1 * 60
}

const numFormatter = (num) => {
	return num < 10? `0${num}` : num;
}


const dms2 = (num) => {
	let degrees = Math.floor( num);
	let minutes = Math.floor(decimal(num));
	console.log("Logging deg " + degrees);
	console.log(minutes);
	let seconds = Math.floor(decimal(decimal(num)))
	console.log(seconds);
	return `${degrees}\u00B0${numFormatter(minutes)}\'${numFormatter(seconds)}\"`
}

console.log(dms2(30));           // 30°00'00"
console.log(dms2(76.73));        // 76°43'48"
console.log(dms2(254.6));        // 254°35'59"
console.log(dms2(93.034773));    // 93°02'05"
console.log(dms2(0));            // 0°00'00"
console.log(dms2(360));          // 360°00'00" or 0°00'00"


// First thing that needs to be done is create a helper function that will take care of reducing the number by base 10 we can do this by easily getting the remainder of number by one this gives us the remainder which will then be multiplied by 60 because there 60 minutes in a degreee.
// this is how we get minutes and we do this twice to get seconds we want the first remainder then we want the first remainder to be able to reduced again by the same function which then brings you back into seconds degree because we resuse the output from the first time the function is called on the number 
// this is the easiest approach because we do not have to create extra variables or take extra steps to prevent certain condidtions from not happening because we did not take into account the amount of zeros the number we are using as argument 


