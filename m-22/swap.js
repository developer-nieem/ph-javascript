
let first = 3;
let second = 5;

// ============= wrong approch
// first = second ;
// second = first ;

console.log(first, second);

// ========== approch 1 

// let temp = first
// console.log(temp);
// first = second ;
// second = temp ;
// console.log(first, second);

// approch 2 

[ first , second ] = [ second , first ];

console.log(first, second);