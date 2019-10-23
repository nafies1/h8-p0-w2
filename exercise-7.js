 // [Exercises 7] Perulangan - Play with Asterisks

 // 1. Menyusun Barisan Bintang
 console.log('1. Menyusun Barisan Bintang');

var rows1 = 5; // input the number of rows

while (rows1 > 0){
	console.log('*');
	rows1 -= 1;
}

 // 2. Menyusun Barisan Bintang Dengan Nested Looping
 console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');

var rows2 = 5; // input the number of rows
var i = rows2;
while (rows2 > 0){
	var star2 = '';
	for (var cols2 = i; cols2 > 0; cols2--) {
		star2 += '*';
	}
	console.log(star2);
	rows2 -= 1;
}

 // 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
 console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');

 var rows3 = 5; // input the number of rows
var i = 0;
while (i < rows3){
	var star3 = '';
	for (var cols3 = 0; cols3 <= i; cols3++) {
		star3 += '*';
	}
	console.log(star3);
	i++;
}