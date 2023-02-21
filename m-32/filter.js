const numbers = [12,85,76,44,79,56,47,87,48,54];

const products = [
    {id:1, name:'laptop', price:50000},
    {id:2, name:'mobile', price:80000},
    {id:3, name:'tv', price:5000},
    {id:3, name:'tab', price:15000}
]

const bigNum =  numbers.filter(num => num > 50);
console.log(bigNum);

const smallNum =  numbers.filter(n=> n<50 );
console.log(smallNum);

const evenNum =  numbers.filter(n=> n%2== 0)
console.log(evenNum);

const lowPrice =  products.filter(n=> n.price < 10000);
console.log(lowPrice);




