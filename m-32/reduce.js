
const numbers = [12,85,76,44,79,56,47,87,48,54];

const totalSum =  numbers.reduce((sum , number)=> sum +number, 0);
// console.log(totalSum);

const totalMulti=  numbers.reduce((sum , number)=> sum * number, 1);
// console.log(totalMulti);
