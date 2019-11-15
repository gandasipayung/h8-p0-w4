function cariModus(arr) {
  // you can only write your code here!
  // arr.sort()
  var tamp = [];
  var hasil = 0;
  var sama = 0;
  for(var i = 0 ; i < arr.length ; i++){
    for (var j = i+1 ; j< arr.length; j++){
      if(arr[i]=== arr [j]){
        sama ++;
        tamp.push(arr[i]);
      }
    }
  }
  if(tamp[0] === undefined || sama > 2){
    hasil = -1
  } else{
    hasil = tamp[0]
  }
  return hasil
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1