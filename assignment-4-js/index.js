

// ========  Problem 1: Let’s play a mind game  

/* function mindGame(number){
    // check validation
    if (typeof number !== 'number' || number < 0) {
        return 'please input correct value';
    }
    //  solve mathematical problem
     const summation = (((number *3) + 10)/2)-5;
     return summation;
}

console.log(mindGame(0));
 */

// ======== Problem 2: Finding even or odd
/* 
function evenOdd(str){
    // check validation
    if(typeof str !== "string"){
        return "Please input String";
    }else{
        // finding even and odd number from the string.
        if(str.length % 2 == 0){
            return "even"
        }else{
            return "odd";
        }
    }
    
}

console.log(evenOdd(20)); */

// ======== Problem 3: Is Less or Greater than seven
/* 
function isLGSeven(number){

    //  validation checking
    if (typeof number !== 'number') {
        return 'please input correct value';
    }else{
        // difference between input value and 7.
        if(number <= 7){
            return number -7 ;
        }else{
            return number + number;
        }
    }
   
}

console.log(isLGSeven('500')); */

// 

function findingBadData(numbers){
    
    //  validation checking
    if(Array.isArray(numbers) !== true){
        return 'please input array';
    }
    // checking bad number of array
    let badData = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
            if (element < 0) {
                badData.push(element);
            }
        
    }
    return badData.length;
}

let output = [ -4, -9, -5, -33, -55,0 ];

console.log(findingBadData(output) );