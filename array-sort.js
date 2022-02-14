const number = [1,4,3,9,7,2,5,6,8];
const sortedNumber = number.sort()
//console.log(sortedNumber);

const name = ['abul','habul','babul','cabul','dabul'];
//const sortedName = name.sort();
//console.log(sortedName);

//const reverseName = name.reverse();
//console.log(reverseName);

const doubleNum = [43,38,69,49,80,9,44,3];
const sortDnum = doubleNum.sort(function(a,b){
    return a-b;
});
console.log(sortDnum);