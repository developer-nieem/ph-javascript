
//  ======== c to f
 
/*  function celsiusToFahrenheit(num){

        var result = (num*1.8)+32;
        return result+"°F";
 }


 let output = celsiusToFahrenheit(2);

console.log(output );
 */

//  ======== f to c

function fahrenheitToCelsius(num){
    var result = (num - 32) * 5/9    /* 0.555 */
   var resultFixed = result.toFixed(3);
    return resultFixed + "°C"
}

var output = fahrenheitToCelsius(40);

console.log(output);