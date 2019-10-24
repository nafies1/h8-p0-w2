 // [Exercises 13] X dan O

 function xo(str) {
  // you can only write your code here!
  var lengthStr = str.length - 1;
  var ex=0;
  var oo=0;
  for (i = lengthStr; i >= 0; i--){
  	if (str[i] == 'x') {
  		ex++;
  	} else if (str[i] == 'o') {
  		oo++;
  	} else {
  		return 'input tidak valid';
  	}
  }
 
  var isiXnO = ex==oo;
  return isiXnO;
  
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true