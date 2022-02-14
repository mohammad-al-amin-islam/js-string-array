const number =[1,2,3,4,5,6,7,8,9,10];

// using slice
/* const makeSlice = number.slice(4,6);
console.log(makeSlice);
console.log(number);//slice doesnt make changes to an array */

//using splice
const makeSplice = number.splice(4,2);
console.log(makeSplice);
console.log(number);//splice make changes to original array
const makeSplice2 = number.splice(9,0,11,12,13);
console.log(number);
