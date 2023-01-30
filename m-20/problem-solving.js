
// ========= problem soved -- 1   namta 

/* function multiplicationTable(num){

    for(var i = 1; i <= 10; i++){
        var multiplication = (num + 'x' + i ) + '=' + (num*i);
        console.log(multiplication);
    }
}

var putValue = 13;
multiplicationTable(putValue); */

// ====================problem solved ----- 2

/* function textTransform(text){

    var output = text.toLowerCase();

    return output ;
}

var putValue = 'UPPERCASE DILAM';
var result = textTransform(putValue);
console.log(result);
 */

// ====================problem solved ----- 3

// function fullName(firstName, lastName){
//       var myName = firstName + ' ' + lastName;
//       var upperCase = myName.toUpperCase();
//       return upperCase;
// }

// var resultName = fullName("Nieem", "hossen");

// console.log(resultName);


// ====================problem solved ----- 4

/* function square(num){
    return num * num;
    
}

var result = square(500);
console.log(result); */

// ====================problem solved ----- 5

const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
   
    crust: 'deep dish',
   
    serves: 2
   
   }

   var findProperty =  pizza.toppings;
  var findValue = findProperty[2]
   console.log(findValue);