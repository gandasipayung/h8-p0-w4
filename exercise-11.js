/*Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000 */

var arr = [['Sepatu Statcattu', 1500000], ['Baju Zoro', 500000], ['Baju H&N', 250000], ['Sweater Uniklooh', 175000], ['Casing Handphone', 50000]]

function shoppingTime(memberId, money) {
  // you can only write your code here!
  var newArr = [];
  var sisa = 0;
  var total = 0;
  var uang = money; 
  for(var i = 0 ; i < arr.length ; i ++){
    if (money > arr[i][1]){
      newArr.push(arr[i][0]);
      money - arr[i][1];
      total += arr[i][1]
    }
  }
  sisa = money - total
  var obj = {};
  if(memberId === undefined && money === undefined || memberId.length == 0){
    obj = 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if(money < 50000){
    obj = 'Mohon maaf, uang tidak cukup'
  } else{
    obj.memberId = memberId;
    obj.money = uang;
    obj.listPurchased = newArr;
    obj.changeMoney = sisa;
  }
  return obj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja