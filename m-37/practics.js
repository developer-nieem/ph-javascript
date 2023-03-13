/* 
const a =  'false';
if(a){
    // console.log(true);
}else{
    // console.log(false);
}



const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); 
}

function sum(p, q) {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);

   if ("2" == 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }

   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);
   
    */

//    problem 1 .1

// console.log([] == true);  // output is false

// problem 1.2
// console.log(true === 'ture');   // output is false

// problem 1.3

const testing = (value) => {
  if (isNaN(value)) {
    return true;
  } else {
    return false;
  }
};

const output = testing(12);
// console.log(output);

// problem 2
/* 
let storeFalsyValue = undefined;

if (storeFalsyValue) {
  console.log(`Nothing to show!`);
} else {
  console.log(`You are amazing!`);
}
 */

// problem 3

const calculation =  (valu1, value2, value3 ) =>{
    if(value3=== 'add'){
        console.log(valu1 +value2);
    }else if(value3 === 'subtract'){
        console.log(valu1 - value2);
    }else if(value3 === 'multiply'){
        console.log(valu1 * value2);
    }else if(value3 === 'divide'){
        console.log(valu1 / value2);
    }else if(value3 === 'modulus'){
        console.log(valu1 % value2);
    }else{
        console.log('invailid oparation');
    }
 
}

const result = calculation(5,5, 'add')