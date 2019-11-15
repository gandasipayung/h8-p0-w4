function graduates (students) {
  // Code disini
  var output = {};
  // for(var i = 0 ; i < students.length ; i++){
  //   if(output.hasOwnProperty(students[i].class)=== false){
  //     output[students[i].class] = []
  //     if (students[i].score > 75) {
  //       output[students[i]['class']].push(students[i]), delete students[i].class
  //     }
  //   } else { 
  //     if (students[i].score > 75) {
  //       output[students[i].class].push(students[i]), delete students[i].class
  //     }
  //   }
  // }
  for(var i = 0 ; i < students.length ; i++){
    if(output.hasOwnProperty(students[i].class) && students[i].score > 75){
      output[students[i].class].push(students[i]), delete students[i].class
    } else if (students[i].score > 75) {
      output[students[i].class] = []
      output[students[i]['class']].push(students[i]), delete students[i].class
      
    }
  }
  
  return output
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));


// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

// console.log(graduates([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


// console.log(graduates([])); //{}



/* jika kelas tidak ada
maka kelas di tambah ke objek dengan key nama kelas
kemudian key dengan nama kelas berbentuk array agar bisa di push
kemudian push objek ke dalam key
objek hanya berisi nama dan score

looping ke 2
jika nama kelas tidak ada di output
maka kelas ditambahkan ke objek dengan key kelas
kemudian key dengan nama kelas berbentuk array agar dapat di push
objek yang akan di push hanya berisi nama dan score

looping ke 3
karena nama kelas ada
maka yang di objek di push ke dalam key
objek yang di push hanya berisi nama dan score

looping ke 4
karena nama kelas ada
maka yang di push ke key adalah objek 
objek yang di push hanya berisi nama dan score

BANYAK LATIHAN MAKANYA GAN ! BIAR GA KAYAK MINUM SUSU BASI WAKTU KECIL!
*/
