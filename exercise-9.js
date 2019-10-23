// [Exercises 9] Berlatih Penggunaan Functions

// TUGAS 1
console.log('');
console.log('TUGAS 1');
console.log('');

function shoutOut(){
	return 'Halo Function!';
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

console.log('');
console.log('TUGAS 2');
console.log('');

function calculateMultiply(num1, num2){
	var hasil = num1*num2;
	return hasil;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('');
console.log('TUGAS 3');
console.log('');

function processSentence(name,age,address,hobby) {
	var kalimat = `Nama Saya ${name}, umur Saya ${age} tahun, alamat Saya di ${address}, dan Saya punya hobby yaitu ${hobby}!`;
	return kalimat;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 

// Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"