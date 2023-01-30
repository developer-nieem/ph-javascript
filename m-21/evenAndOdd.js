
function evenAndOdd(number){
    const calculation = number % 2;

    if(calculation === 0){
        return true;
    }else{
        return false;
    }
}

const yourValues = 400;
const output = evenAndOdd(yourValues);
console.log(output);