
let numbers = [12, 25, 34, 69, 88, 44];
let age = {
    rohim : 15,
    korim : 17,
    monim : 13
}
function add(num1 , num2){
    return num1 + num2;
}

console.log(typeof age);
console.log(typeof add);
console.log(Array.isArray(numbers));

//  find a array element

console.log(numbers.includes(12));

// concate array 
let newNum= [555, 666, 1800]
var addMoreArray = newNum.concat(numbers, 50000);
console.log(addMoreArray);