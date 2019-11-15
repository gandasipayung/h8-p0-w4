function urutkanAbjad(str) {
  // you can only write your code here!
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  var tamp = [];
  for(var i = 0 ; i < str.length ; i++){
    var posisi = abc.indexOf(str[i])
    tamp.push(posisi)
  }
  function atur(a,b) {
    return a-b
  }
  tamp.sort(atur);
  // console.log(tamp);
  var hasil = '';
  for(var i = 0 ; i < tamp.length ; i++){
    hasil += abc[tamp[i]]
  }
  return hasil
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'