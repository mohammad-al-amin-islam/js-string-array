const products = [
    'my new Phone',
    'Phone samsung s22+ phone is good loking',
    'laptop needed like apple macbook',
    'my latop is slowing day by day',
    'xiaomi phone objection is going to high day by day',
    'htc is low quality phone'
]

const search = 'Phone';
//using index
const result = [];
for(const product of products){
    if(product.toLowerCase().indexOf(search.toLowerCase()) != -1){
        //result.push(product);
    }
}
//console.log(result);

//using includes
for(const product of products){
    if(product.toLowerCase().includes(search.toLowerCase())){
        //result.push(product);
    }
}
//console.log(result);

// using startsWith()
for(const product of products){
    if(product.toLowerCase().startsWith(search.toLowerCase())){
        //result.push(product);
    }
}
//console.log(result);

//using endsWith()
for(const product of products){
    if(product.toLowerCase().endsWith(search.toLowerCase())){
        result.push(product)
    }
}
console.log(result);