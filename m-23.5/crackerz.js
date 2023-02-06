/* 
const reverseMaker = (word)=> {
        let result = word.split("").reverse().join('');
        return result
};

let input = reverseMaker("GeeksforGeeks");

 */
// ====================================
/* 
const solution = (letter)=> {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return 'VOWEL';
    }else{
        return 'CONSONANT';
    }
  };

  const output = solution('y');
  console.log(output);

   */
  // ====================================
/* 
  const totalCost = (products) => {

    let sum = 0;
	for (let i = 0; i < products.length; i++) {
        const element = products[i];
        sum = sum + element.price;
    }
return sum;
  };

  let output = totalCost([{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}])

  console.log(output); */
// ====================================
 
/*   function temperatureConverter(valNum) {
   let convert =  (valNum-32)/1.8;
   const result = parseFloat(convert.toFixed(2));
    return result;
  }
  temperatureConverter(103) */

// ====================================

 /*  function subtraction (num1, num2){
            let result = num1 - num2;
            return result;
    }
    console.log(subtraction(1000,700)); */

    // ========================================
/* 
    function average (arrOfMarks){
        let sum = 0;
         
            for (let i = 0; i < arrOfMarks.length; i++) {
                const element = arrOfMarks[i];
                sum = sum + element;
                
            }
            const average = sum / arrOfMarks.length;
             const result =parseFloat(average.toFixed(2))
            return result;
       }

    let output =average( [100, 100, 100, 100, 100]);
    console.log(output);
     */

    function stringCombine(str1, str2){
         return str1 + " " + str2;
        }