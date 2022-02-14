const anthem = 'amar sonar bangla ami tomay valobashi';

//using split
const makeSplit = anthem.split(' ');
const withA = anthem.split('a');
//console.log(withA);

//using slice start number and where to end before
const makeSlice = anthem.slice(5,10);
//console.log(makeSlice);

//using substr start number and how many needs
const makeStr = anthem.substr(5,11);
//console.log(makeStr);

//using substring same as slice
const makeSubString = anthem.substring(5,10);
//console.log(makeSubString);

//using concat to bind
const firstName ='al amin ';
const lastName ='islam';
//console.log(firstName + lastName);
const makeConcat = firstName.concat(lastName).concat(' name');
//console.log(makeConcat);

const word = ['am', 'bad', 'cfg', 'dfg'];
//const makeJoin = word.join(' ');
const makeJoin = word.join(',A');
console.log(makeJoin);
