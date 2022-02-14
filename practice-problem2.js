//২) একটা অ্যারেতে তোমার বন্ধু বা বান্ধুবির পুরা নাম রাখো এবং যাদের নাম md দিয়ে শুরু হয় সেই নামগুলো প্রথমে console log করবে। তারপর পুরা জিনিসটা একটা ফাংশনে রাখো। এবং তোমার কাজ হবে। যার যার নাম md দিয়ে শুরু হয়। সেই নামগুলো রিটার্ন করবে। 

// এক্সট্রা: চেষ্টা করবে কারো নাম যদি MD বা Md বা md হয়। তাদের নাম যেন তোমার রিটার্ন রেজাল্টে যোগ হয়। 

const names = [
    'md omuk khan',
    'Md tomuk khan',
    'MD nimuk khan',
    'khan khana khan'
];
function commonName(names){
    let newArray = []
    for(const name of names){
        if(name.toLowerCase().startsWith('md')){
            newArray.push(name);
        }
    }
    return newArray;
}
const name = commonName(names);
console.log(name);