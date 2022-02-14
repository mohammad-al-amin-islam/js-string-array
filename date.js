const getDate = new Date('1972-12-16');
//console.log(getDate);
const getDate2 = new Date(1972, 3, 26, 11, 50, 40, 80);
console.log(getDate2);
if (getDate.getTime() > getDate2.getTime()) {
    console.log('getdate is earlier');
}
