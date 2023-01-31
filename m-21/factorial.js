function factorial(number){

    let fact = 1
    for (let i = 1; i <= number; i++) {
        const element = i;
        fact = fact * element
        console.log( element, fact);
    }
}

//  Reverse way 

/* function factorial(number){

    let fact = 1
    for (let i = number; i >= 1; i--) {
        const element = i;
        fact = fact * element
        console.log( element, fact);
    }
} */

factorial(5)