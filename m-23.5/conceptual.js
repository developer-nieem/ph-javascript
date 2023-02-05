// Basic problem

// ====== 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
/* 
function summition(num){
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        const element = i;
        sum = sum + element;
        
    }
    return sum;
}

let value = 10;
let output = summition(value);
console.log(output);
 */

// ====== ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।

function namata(number){
    
    for (let i = 1; i <= 10; i++) {
        let element = i;
        let total = element +'x'+ number+ '=' + element*number;
        console.log(total);
    }
    
}

let value  = 5;
namata(value);

