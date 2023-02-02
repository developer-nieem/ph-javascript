
function arrayMax(numbers){
    let tollest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > tollest) {
            tollest = element;
        }
        
    }
  return tollest;
}




var height = [168, 159, 186, 154, 167, 149];
var output = arrayMax(height)
console.log(output );

// console.log(Math.max(...height));

