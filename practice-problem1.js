//১) একটা অ্যারেতে তোমার পছন্দের খাবার গুলো রাখো এবং যে সব খাবারের নামের মধ্যে m আছে সেসব খাবারের নামগুলো console log করো। 

const favFood = ['buger','mutton','kacchi','malta'];
for(const food of favFood){
    if(food.toLowerCase().includes('m')){
        console.log(food);
    }
}
