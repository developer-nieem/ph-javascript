
const faterName = "akkas";

let selary = 50000;

const address ={
    city : 'barguna',
    divistion: 'barisal'
}
const bioData =  ` he is name hasan 
 his faters name ${faterName} and 
 his selary ${selary}
 he live in city ${address.city}
 his live in divistion ${address.divistion}
 
 `
//  console.log(bioData);

//   3.1

const divisible = Number => Number / 5;

// console.log(divisible(50));

// 3.2
const doublePeramiter=  (num1 , num2) => (num1 + 2) * (num2+2);
// console.log(doublePeramiter(2,2));

// 3.3
const tripolPeramiter = (num1, num2, num3) => num1 * num2 * num3 ;
// console.log(tripolPeramiter(2,2,2));

const doublePeramiter2=  (num1 , num2) => {
   const sum1 =   num1 + 2;
   const sum2 =   num2 + 2;
   const total =  sum1 * sum2;
   return total;
} 

// console.log(doublePeramiter2(2,2));

//  5 

// const number = [56,54,97,94,95,85,9];
// const numberResult  = number.map(n=> n*5);
// console.log(Array.isArray(numberResult), numberResult );

//  6

const number = [56,54,97,94,95,85,9];
const odd =  number.filter(n=> n % 2 !== 0);

// console.log(odd);


// ================   7

const products = [
    {name:'laptop' , price:50000},
    {name:'mobile' , price:15000},
    {name:'tab' , price:20000},
    {name:'tv' , price:5000},
]

const findLowPrice  = products.find(product => product.price === 5000);

// console.log(findLowPrice);

// 7.5

// map =  map is give output a return with array
// forEach =  its not return the function 
// filter =  its check condition then give a outupt of array 
//  find =  its also check condition but give output just 1st one


// =====  8

const user = {name:'hasan', age: 32, job: 'govt'}

const {name , age , job} = user;

// console.log(name , age, job);


// ======== 9

// const [first, second , third] = [65,64,65,49,67,49];
const [, , third] = [65,64,65,49,67,49];

// console.log(third);

//  ================ 10

const threePeramiter =  (num1 , num2 , num3 = 7) => num1 + num2 + num3;

// console.log(threePeramiter(12,12,));