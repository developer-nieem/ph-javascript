//  if we call a variable previously declaration , and if not decler a variable but we want to call, and if we call before a arrow function but decler after



// console.log(a);   ReferenceError: Cannot access 'a' before initialization 
// const a = 'word' 

const aa =  'name';
const bb =  'bname'
// console.log(cc);  ReferenceError: cc is not defined;

// console.log(name);  ReferenceError: Cannot access 'name' before initialization
// const name =  (n1, n2) => n1+n2

function doSomething () {
    const sum = 55;
}

// console.log(sum); ReferenceError: sum is not defined