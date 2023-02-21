// only give 1st option that get after equal condition

const numbers = [12,85,76,44,79,56,47,87,48,54];

const evenFirst =  numbers.find(n=> n % 2 == 0 );
console.log(evenFirst);