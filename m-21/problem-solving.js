
// ============= Problem solving 1

/* function hourToMin(hours){
    var result = hours * 60;
    return result ; 
}

var values = 40;
var output = hourToMin(values);
console.log(values, "hour to min", output); */


// // ============= Problem solving 2

/* 
function findLeapYear(years){
        let isLeapYear = [];
        for (let i = 0; i < years.length; i++) {
            const element = years[i];
           if(element % 2 == 0 && element % 100 !== 0 || element % 400 == 0){
            //  console.log(element);
            isLeapYear.push(element)
           }
            
        }
        return isLeapYear;
}

const yourYears = [2023, 2024, 2025, 2028, 2030];
const output = findLeapYear(yourYears);

console.log(output);
 */


// // ============= Problem solving 3

function findOddSum(number){
            
    // =======Find odd number from array
            let oddArray = [];
            for (let i = 0; i < number.length; i++) {
                const element = number[i];

                if (element % 2 != 0) {
                    oddArray.push(element)
                }
            }
            // console.log(oddArray);

            // ===== sum founded odd array
            let sumOdd= 0;
            for (let i = 0; i < oddArray.length; i++) {
                const element = oddArray[i];
                // console.log(element);
                sumOdd = sumOdd + element;
            }
            return sumOdd;

}

var arrayValus = [5, 7, 8, 10, 45, 30];
var output= findOddSum(arrayValus);

console.log(output);