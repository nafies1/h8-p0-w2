 // [Exercises 6] Berlatih Perulangan di JavaScript

// No 1. 1. Melakukan Looping Menggunakan While
console.log("1. Melakukan Looping Menggunakan While");
console.log('');

console.log('LOOPING PERTAMA');
var i = 2;
while (i <= 20){
	console.log(i + " - I love coding");
	i += 2;
}

console.log('LOOPING KEDUA');
var i = 20;
while (i >= 2){
	console.log(i + " - I love coding");
	i -= 2;
}


// No 2. Melakukan Looping Menggunakan For
console.log('');
console.log("2. Melakukan Looping Menggunakan For");
console.log('');

console.log('LOOPING PERTAMA');

for (i = 1; i <= 20; i++){
	console.log(i + " - I love coding");
}

console.log('LOOPING KEDUA');

for (i = 20; i >= 1; i--){
	console.log(i + " - I will become fullstack developer");

}

// No 3. 3. Angka Ganjil dan Genap
console.log('');
console.log("3. Angka Ganjil dan Genap");
console.log('');

console.log("Untuk Pertambahan counter 1");

for (var i = 1; i <= 100; i++) {
	if (i%2==0) {
		// var h='GENAP';
		console.log('GENAP');
	} else {
		console.log('GANJIL');
		// var h='GANJIL';
	}
	// console.log(i + ' ' + h);
}

console.log('-------------------------------');
console.log("Untuk Pertambahan counter 2");

for (var i = 1; i <= 100; i += 2) {
	if (i%3==0) {
		console.log(i +' kelipatan 3');
	} else {
		console.log('');
	}
}

console.log('-------------------------------');
console.log("Untuk Pertambahan counter 5");

for (var i = 1; i <= 100; i += 5) {
	if (i%6==0) {
		console.log(i +' kelipatan 6');
	} else {
		console.log('');
	}
}

console.log('-------------------------------');
console.log("Untuk Pertambahan counter 9");

for (var i = 1; i <= 100; i += 9) {
	if (i%10==0) {
		console.log(i +' kelipatan 10');
	} else {
		console.log('');
	}
}