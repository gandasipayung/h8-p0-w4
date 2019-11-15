function changeMe(arr) {
  // you can only write your code here!
  var obj = {};
  var tahun = 2019;
  if (arr.length === 0 ){
    console.log(`""`);
  } else {
  for (var i = 0 ; i < arr.length ; i++ ){
    obj.firstName = arr[i][0];
    obj.lastName = arr[i][1];
    obj.gender = arr[i][2];
    if(arr[i][3] === undefined){
      obj.age = 'Imvalid Birth Year'
    } else {
      obj.age = tahun - arr[i][3];
    }
    console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]} : `);
    console.log(obj);
    }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""