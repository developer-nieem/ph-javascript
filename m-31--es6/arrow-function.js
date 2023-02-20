
// function diclaration 

function name(firstName , secondName){
    const fullName =  firstName + secondName;
    console.log(fullName);
}

// Annonumas function

const name0 =  function(firstName , lastNAme){
    return firstName + lastNAme;
}


// arrow function

const name2 =  (firstName , secondName)=> firstName + secondName;

// one parameter 
const name3 =  fullName => fullName;
console.log(name3('nieem'));

// Multipale arrow function

const idName =  (a, b, c) => {
    const part1 =  a * b;
    const part2 =  a * c;
    const part3 =  b * c;
    // const total =  part1 + part2 + part3;
    return part1 + " " + part2 + " "+ part3;
}

console.log(idName(5,8,9));