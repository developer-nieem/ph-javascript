/* 
function getOddNumberAndSum(number){
            let oddNumber =[];
            for( let i = 0; i < number.length; i++){
                const element = number[i];
                if(element % 2 !== 0){
                    // console.log(element);
                    oddNumber.push(element);
                }
            }

            // =======  make array sum
                let oddSum = 0;
            for (let i = 0; i < oddNumber.length; i++) {
                const oddElement = oddNumber[i];
                    oddSum = oddElement + oddSum;
                // console.log(i, oddElement, oddSum);
            }
            
            // console.log(oddSum);
            return oddSum;
}

const values = [57, 88, 46, 85, 75, 58, 69, 64];
const output =  getOddNumberAndSum(values);

console.log(output); */

// =====================  another Way
function arraySum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum = sum + element;
  }
  return sum;
}

function getOddNumber(number) {
  let oddNumber = [];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element % 2 !== 0) {
      oddNumber.push(element);
    }
  }

  return oddNumber;
}

const values = [57, 88, 46, 85, 75, 58, 69, 64, 65, 85, 95, 96, 65, 98, 55];

// array sum output
const outputSum = arraySum(values);
// console.log(outputSum);

// Odd number output
const outputOdd = getOddNumber(values);
// console.log(outputOdd);

// find odd then sum
const arryOdd_Sum = outputOdd;
const output_ArrayOddSum = arraySum(arryOdd_Sum);
console.log(output_ArrayOddSum);
