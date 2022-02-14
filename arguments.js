function addNumber(num1,num2){
    //console.log(arguments);
    let result = 0;
    for(const num of arguments){
        result = result +num;
    }
    return result;

}
const add = addNumber(34,34,34);
//console.log(add);

function addString (firstName,lastName){
    let result = '';
    for(const part of arguments){
        result = result + part + ' ';
    }
    return result;
}
const addName = addString('omuk','khan','bin','tomuk','khan');
console.log(addName);