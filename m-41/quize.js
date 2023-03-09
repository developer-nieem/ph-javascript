const person = {
    name: "hero", 
    id: 101, 
    address: "BD",
    postalCode: 40321
  };

  console.log(Object.keys(person).length);

  const animals = ['cat', 'dog', 'rat'];
console.log(animals.includes('Cat'));


const array = [2,3,4,5,2];
const unique = array => array.indexOf('21');

console.log(unique(array));

const add =(para1 , para2) => para2 + para1
console.log(add('2',3));



const colors = {mango: 'green', grapes: 'black', organe: 'yellow'};
console.log(colors[grapes])