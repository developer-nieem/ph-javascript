/* 
const reverseMaker = (word)=> {
        let result = word.split("").reverse().join('');
        return result
};

let input = reverseMaker("GeeksforGeeks");

 */

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

  const totalCost = (products) => {

    let sum = 0;
	for (let i = 0; i < products.length; i++) {
        const element = products[i];
        sum = sum + element.price;
    }
return sum;
  };

  let output = totalCost([{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}])

  console.log(output);