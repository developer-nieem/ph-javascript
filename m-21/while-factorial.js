/* 
function factorial(number){
    let i = 1;
    let fact = 1;
    while(i <= number){
        // console.log(i);
        fact = fact * i;

        console.log(i , fact);
        i++
    }

}

factorial(5) */

// =============== reverse way

function factorial(number){

    let i = number;
    let fact = 1;
    while(i >= 1){
       
       fact = fact * i;
       console.log(i, fact);
        i--;
    }
}

factorial(5)