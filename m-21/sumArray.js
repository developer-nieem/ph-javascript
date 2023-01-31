
function sumArray(number){
    // console.log(number);
        let sum = 0;
    for( let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
            sum = element + sum;
        console.log(index, element, sum);
    }

    return sum;
    
}

const values = [57, 88, 46, 85, 75, 58, 69, 64];

sumArray(values);