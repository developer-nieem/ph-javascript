
// type error means , we cannot did that not possible to do js like , change const value , find propertais without object , and you want add a value without array 


const b= 10;
// b= 15;  TypeError: Assignment to constant variable.


// let address ;
// console.log(address.name);   TypeError: Cannot read properties of undefined (reading 'name')

let address = {
    name: 'ami',
    bari: 'omne'
}

// console.log(address.bBarira.home);  TypeError: Cannot read properties of undefined (reading 'home')

const p = '5';
// p.push(10);  TypeError: p.push is not a function
const greeting = 'Hello, world!';