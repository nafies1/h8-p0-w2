// [Exercises 11] Balik Kata

function balikKata(kata) {
	var index = kata.length - 1;
	var letter = '';
	for (i=index; i >= 0; i--){
		letter += kata[i];
  // you can only write your code here!
	}
	return letter ;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS