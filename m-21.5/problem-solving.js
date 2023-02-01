
//  ======== c to f
 
/*  function celsiusToFahrenheit(num){

        var result = (num*1.8)+32;
        return result+"°F";
 }


 let output = celsiusToFahrenheit(2);

console.log(output );
 */

//  ======== f to c
/*  
function fahrenheitToCelsius(num){
    var result = (num - 32) * 5/9    
   var resultFixed = result.toFixed(3);
    return resultFixed + "°C"
}

var output = fahrenheitToCelsius(40);

console.log(output); 
 
 */

function hotel(day){
    if(day <= 10){
        var cost = day * 500;
        return cost;
    }else if(day >= 11 && day <= 20){
        /* 
        // cost 10days
        var cost10Days = 10*500;

        var daysAfter10 = day - 10;
        var cost11To20= daysAfter10 * 300;
        var total = (cost10Days + cost11To20) ;
        return total;
 */
            return (day - 10)*300 + (500*10);

    }else if(day >= 21){
        /* 
        // cost 10days
        var cost10Days = 10*500;

        // cost 11-20 dyas
        var cost11To20 = 10*300;

        var daysAfter20 = day -20;
        var cost21ToInfinity= daysAfter20*100;
        var total3 = cost10Days + cost11To20 + cost21ToInfinity; 
        return total3 ;
        */

            return (10*500) + (10*300) + (day-20)*100;
        
    }
}

var output= hotel(18);
console.log(output);