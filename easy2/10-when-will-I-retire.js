/*Build a program that logs when the user 
 will retire and how many more years the
 user has to work until retirement.


*/

const retire = (age,retirement,year) => {
	console.log("What is your age? "  + age)
	console.log("At what age would you like to retire? " + retirement)
	console.log("It's " + year + ". You will retire in " + ((retirement - age) + year) + ".")
        console.log("You have only " +  (retirement - age) + " years of work to go!")
}

retire(30, 70, 2017)
