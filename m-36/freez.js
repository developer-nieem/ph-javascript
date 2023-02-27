
const user ={ name : 'hanas' , age: 23, salary: 8000, isSick:false};

const getProperties = Object.keys(user);
// console.log(getProperties);
const getValue =  Object.values(user);
console.log(getValue);

// Object.freeze(user)
// Object.seal(user);
const pair = Object.entries(user);
console.log(pair);

delete user.isSick;
console.log(user);

user.height = 4.4;
console.log(user);
