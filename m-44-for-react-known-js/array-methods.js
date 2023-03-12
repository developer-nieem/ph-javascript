const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// map give a return
const productsName =  products.map(name=> name.name);
// console.log(productsName);

const productsPrice = products.map(prices => {
    if (prices.price < 5000) {
        // console.log(prices.brand);
    }
})

// for each  no return

products.forEach(product=> {
    // console.log(product);
})


// filter  we can applay condition and give return  array of main array if fulfill the condition

const lowPrice =  products.filter(prices => prices.price < 5000)
// console.log(lowPrice);

const sName =  products.filter(p=> p.name.includes('n'));
console.log(sName);


//4. find  we can applay condition and give return first array of main array if fulfill the condition
const special = products.find(p => p.name.includes('n'));
console.log(special);