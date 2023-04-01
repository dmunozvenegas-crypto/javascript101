/* Madlibs is a simple game where you 
 * create a story template with "blanks"
 * for words. You, or another player, then 
 * construct a list of words and place them 
 * into the story, creating an often silly or 
 * funny story as a result.

Create a simple madlib program that prompts for 
a noun, a verb, an adverb, and an adjective, 
and injects them into a story that you create.
*/

const story =() => {
	let rlySync = require('readline-sync');
	let noun = rlySync.question('Enter a noun: ');
	let verb = rlySync.question('Enter a verb: ');
	let adjective = rlySync.question('Enter an adjective: ');
	let adverb = rlySync.question('Enter an adverb: ');
	// console output
	console.log("Do you " + verb + " your " + adjective + " " + noun + " "  + adverb + "? That's hilarious!\nThe " + adjective + " " + noun + " " + verb + "s "+ adverb + "  over the lazy dog.\nThe " + noun + " " + adverb + " " + verb + "s up " + adjective + " Joe's turtle.");
}

story();
