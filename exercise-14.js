function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var ongkos = 2000;
  var awal = 0;
  var akhir = 0;
  var jarak = 0;
  var hasil = [];
  // for(var i = 0 ; i < rute.length ; i ++){
  //   if (rute[i] === arrPenumpang[i][1]){
  //     awal = i
  //   }
  //   if (rute[i] === arrPenumpang[i][2]){
  //     akhir = i
  //   }
  // }
  
  for(var i = 0 ; i < arrPenumpang.length ; i++){
    var obj = {};
    obj.penumpang = arrPenumpang[i][0];
    obj.naikDari = arrPenumpang[i][1];
    obj.tujuan = arrPenumpang[i][2];
    // console.log(obj);
    // console.log(arrPenumpang.length);
    for(var j= 0 ; j < rute.length ; j++){
      if (rute[j] === arrPenumpang[i][1]){
        awal = j
        // console.log(awal);
      }
      if (rute[j] === arrPenumpang[i][2]){
        akhir = j
        // console.log(j)
      }
      obj.bayar = (akhir-awal) * ongkos
    }
    
    hasil.push(obj)
    // console.log(hasil);
    
  }
  return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]