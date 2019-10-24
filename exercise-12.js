// [Exercises 12] Konversi Menit

function konversiMenit(menit) {
  // you can only write your code here!
  var jam = Math.floor(menit/60);
  var min = menit%60;
  min += '';
  if (min.length == 1){
  	min = '0'+ min;
  }
  var waktu = jam + ':' + min;
  return waktu ;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
