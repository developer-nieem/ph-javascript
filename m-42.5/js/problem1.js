// 

// 1.1 
localStorage.setItem('name' , 'nieem khan');

// 1.2
localStorage.setItem('age' , 40)

// 1.3
const getItem =  localStorage.getItem('name');
console.log(getItem);

// 1.4
 localStorage.removeItem('name');
 localStorage.removeItem('age');

//  1.5

const name =  {firstName: 'abraham' , lastName: 'linkhon'};
const nameStringfy = JSON.stringify(name);
localStorage.setItem("Full Name", nameStringfy);
const getItemName =  localStorage.getItem('Full Name');
const makeOb=  JSON.parse(getItemName);
console.log(makeOb);
