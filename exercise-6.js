function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var tamp = [];
  var hasil = 0;
  for(var i = 0 ; i <= angka ; i++){
    for (var j = 0 ; j <= angka ; j++){
      if((i*j) === angka){
        tamp.push(i.toString() + j.toString())
      }
    }
  }
  // console.log(tamp);
  var kecil = tamp[0].length;
  for(var i = 0 ; i < tamp.length ; i ++){
    if (tamp[i].length < kecil){
      kecil = tamp[i].length;
    }
  }
  return kecil
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2