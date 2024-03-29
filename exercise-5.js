 // [Exercises 5] Bermain dengan String di JavaScript

// No 1. Let's Form a Sentence
console.log("No 1. Let's Form a Sentence");
console.log('');

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh);


// No 2. Index Accessing - 1 by 1
console.log('');
console.log("No 2. Index Accessing - 1 by 1");
console.log('');

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; // my own!
var thirdWord = word[15] + word[16]; // my own!
var fourthWord = word[18] + word[19]; // my own!
var fifthWord = word[21] + word[22] + word[23] + word[24]; // my own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// No 3. Breaking Sentence (Again) using Substring
console.log('');
console.log("No 3. Breaking Sentence (Again) using Substring");
console.log('');

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4, 14); // do your own!
var thirdWord3 = word.substring(15, 17) ; // do your own!
var fourthWord3 = word.substring(18, 20); // do your own!
var fifthWord3 = word.substring(21, 25); // do your own!

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);



// No 4. Breaking Sentence (yet Again) and Count Each Length
console.log('');
console.log("No 4. Breaking Sentence (yet Again) and Count Each Length");
console.log('');

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(4, 14); // do your own!
var thirdWord4 = word.substring(15, 17) ; // do your own!
var fourthWord4 = word.substring(18, 20); // do your own!
var fifthWord4 = word.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord4.length;
// create new variables around here
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' +  secondWordLength); 
console.log('Third Word: ' + thirdWord4 + ', with length: ' +  thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' +  fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' +  fifthWordLength);

