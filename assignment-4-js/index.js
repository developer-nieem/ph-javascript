

// ========  Problem 1: Let’s play a mind game  

// ## "mindGame() function taken a positive number then calculation all the positive number. and give a return from the calculation."

function mindGame(number){
    // check validation
    if (typeof number !== 'number' || number < 0) {
        return 'please input correct value';
    }
    //  solve mathematical problem
     const summation = (((number *3) + 10)/2)-5;
     return summation;
}

// console.log(mindGame(5));



// ======== Problem 2: Finding even or odd

//  ## " evenOdd() function It will take a string as input. output will be based on the total number of characters in the String."


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
// console.log(evenOdd('webprohelper'));



// ======== Problem 3: Is Less or Greater than seven

//  ## " isLGSeven() function It will take a number  as input. its difference between the input value and 7. If this difference is smaller than 7, its return the subtraction. Otherwise  return double of the input. "


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

// console.log(isLGSeven(15));



// =============== Problem 4: Finding Bad data

// ## " findingBadData() function It will take a Array as input. Its find how many bad data are there in the array and return that number."

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

// let output = [ -4, -9, -5, -33, -55 ];
// console.log(findingBadData(output) );


// =============== Problem 5: Convert your gems into diamond

// ## "gemsToDiamond(). It takes three numbers as input. Its find out how many diamonds you will get in total by combining the gems of all friends. If the number of total diamonds exceeds 1000, then the number of diamonds remaining after subtracting 2000 from the total diamond . as many we return "

function gemsToDiamond(gemsNum1 , gemsNum2, gemsNum3){
                    // Calculation Friend gems 
                const firstFriendGems= gemsNum1 * 21;
                const secondFriendGems= gemsNum2 * 32;
                const thirdFriendGems= gemsNum3 * 43;

                const totalGems = firstFriendGems + secondFriendGems + thirdFriendGems;

                //  validation checking
                if (typeof gemsNum1 !== 'number' || typeof gemsNum2 !== 'number' || typeof gemsNum3 !== 'number') {
                    return 'please input correct value';
                }else{
                        // Calculate condition 
                        if (totalGems + totalGems > 2000) {
                            const sum = totalGems -2000;
                            return sum;
                        }else{
                            return totalGems;
                        }
                }
                
}

// console.log(gemsToDiamond(20, 200, 50));


