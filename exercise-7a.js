 // 3a. Menyusun Barisan Tangga Bintang Dengan Nested Looping
 console.log('3a. Menyusun Barisan Tangga Bintang terbalik Dengan Nested Looping');

 var rows3 = 8; // input the number of rows

while (rows3 > 0){
	var star3 = '';
	for (var cols3 = rows3; cols3 > 0; cols3--) {
		star3 += '*';
	}
	console.log(star3);
	rows3--;
}