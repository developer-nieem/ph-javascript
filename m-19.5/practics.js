

// var num1 = 25;   var num2= 28;  
// var total = num1 == num2;

// console.log(total);

// var i = 6;
//  i += 2;

//  i -= 2
//  i /= 2;

//  console.log(i);
// while (i > 1) {
//     console.log(i);
//     i--;
// }


// var num = "50" ;  
// var total= parseInt(num); 

// console.log(total);

// var num = 80.5555555;
// var num1 = 40.555;
// var total = num + num1;
// result = total.toFixed(2);
// result= parseFloat(result);

// console.log(result);

// ============== array 

// var number = [56, 45, 46, 58, 96];
// // var result = number.length
// // var result= number.indexOf(46);
// var result= number[2]

// console.log(result);

// ============  if else

// var myCase = 8000;

// if(myCase >= 80000){
//     console.log("mac kinbo");
// }else if(myCase >= 60000){
//     console.log("gameing laptop kinbo");
// }else if(myCase >= 40000){
//     console.log("lenova youga kinbo");
// }else if(myCase >= 20000){
//     console.log('puraton laptop kinbo');
// }else{
//     console.log("mobile diaa kaj korbo");
// }


// ============  loop

// var mood= "aske amar mind valo nai";

// for(var i = 0 ; i <= 39 ; i++){
//     console.log(i);
//     console.log(mood);
    
// }

// var num = 0;
// while(num < 5){
//     console.log("hello");
//     num++;
// }

// for (let i = 58; i <= 98; i++) {
//     console.log(i);
    
// }

// for (let i = 412; i <= 456; i++) {
    
//     if ( i % 2 == 0 ) {
//         console.log(i);
//     }
    
// }

// for (let i = 581; i <= 623; i++) {
    
//     if ( i % 2 == 1 ) {
//         console.log(i);
//     }
// }

// var learn = ['variable', 'if-else', 'loop', 'data type', 'array']

// for (let i = 0; i < learn.length; i++) {
//     const element = learn[i];
//     console.log(element);
    
// }

// var phone= ['smart', 'walton', 'symphony', 'itel', 'realme'];

// var i=0;

// while( i < phone.length){
//     var element = phone[i]
//         console.log(element);
//         i++;
// }

// for (let i = 30; i <= 86; i++) {
   
//     console.log(i);
//     if (i == 44) {
//         break;
//     }
    
// }

var price= [100, 140, 120, 150, 130, 170, 200, 300, 400, 120, 500, 50];

for (let i = 0; i < price.length; i++) {
    const element = price[i];
    
    if(element >= 200){
        continue;
    }
    console.log(element);
    
}