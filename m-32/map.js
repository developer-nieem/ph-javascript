
const numbers = [12,85,76,44,79,56,47,87,48,54];
const updated =  numbers.map(x=>x*x);
console.log(updated);

const newUpdate = [12,85,76,44,79,56,47,87,48,54].map(a=>a*a);

console.log(newUpdate);

const products = [
    {id:1, name:'laptop', price:50000},
    {id:2, name:'mobile', price:80000},
    {id:3, name:'tv', price:5000},
    {id:3, name:'tab', price:15000}
]

const productName = products.map(product => product.name);

console.log(productName);
