function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'please input an arary';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['alo','alamin','islam'];
//console.log(megaFriend(12346));

//index of

if(friends.indexOf('alamin') != -1){
    //console.log('exist');
};

//includes
if(friends.includes('lion')){
    console.log('here');
}
else{
    console.log('not here');
}

//concat
const num1 =[1,2,3,4];
const num2 =[5,6,7,8];

console.log(num1.concat(num2));

