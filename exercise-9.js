// function checkAB(num) {
//   var index1 = 0;
//   var index2 = 0;
//   for(var i=0;i<=num.length;i++){ 
// 				if(num[i] === 'a'){
// 				index1 = i;
// 				}
// 				else if (num[i] === 'b'){
// 				index2 = i;
// 				}
// 				if(Math.abs(index1-index2)===4){
// 					return true;
// 				}
// 		}
// 		return false;
// }


function checkAB(num) {
  for(var i = 0; i < num.length - 4;i++) {
    if(num[i] === 'a' && num[i + 4] === 'b' || num[i] === 'b' && num[i + 4] === 'a') {
      return true;
    }
  }
  return false
}
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false