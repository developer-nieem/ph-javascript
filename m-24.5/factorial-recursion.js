
function factorial(num){

    if(num == 1){
        return 1;
    }

    return num * factorial(num-1);
}

console.log(factorial(5));

function compare(a, b) {

    if (a == b) {
   
    return true;
   
    } else {
   
    return false;
   
    }
   
   }
   
   const result = compare(15, "15");
   
   console.log(result);

  