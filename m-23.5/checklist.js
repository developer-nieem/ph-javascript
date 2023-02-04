/* var name = "nieem";
var isYourName = true;
var number = 2222;

console.log(typeof name , isYourName , number);
console.log(typeof  number);

 */

//  ================ let and const
/* 
let number = 35;
number = 56;
console.log(number); */

// =================  mathmathical

/* let num1 = 56;
let num2 = 7;

const total = num1 + num2;
console.log(total);
const total2 = num1 - num2;
console.log(total2);
const total3 = num1 * num2;
console.log(total3);
const total4 = num1 / num2;
console.log(total4);
const total5 = num1 %  num2;
console.log(total5); */

// ====================== comparison

/* 
let num1 = 56;
let num2 = 7;

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 !== num2); */

// && and || both example   checklist--5

// let name = 'nieem';
// let age = 23;

// if (name === "nieemm" && age > 22) {
//     console.log("he is boro");
// }else{
//     console.log("koite pari na");
// }

// if (name === "nieemm" || age > 22) {
//     console.log("he is boro");
// }else{
//     console.log("koite pari na");
// }

//  ========================== if else    checklist--6

/* if (6> 5) {
    console.log("its big ");
}else{
    console.log("its small");
} */

//  ==========================  while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা     checklist--7
/* 
let number = 7;

while( number<= 19){
    if (number % 2 != 0) {
        console.log(number);
    }
    number++
} */

// ========== ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে।

/* 

let name = ['habul', 'kabul', 'chabul', 'tabul', 'mabul'];
console.log(name.length);

name[4] = 'nieem'
console.log(name);

name.push('hasan', 'kasan');
console.log(name);

name.pop();
console.log(name);

 */

//  ========= ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

/* 
let name = ['habul', 'kabul', 'chabul', 'tabul', 'mabul'];

for( let i = 0 ; i < name.length; i++){
    console.log(name[i]);
}

//   for of 
for(let allName of name){
    console.log(allName);
}

 */

// ============ ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

/* 
let numbers = [98, 85, 74, 79, 65, 46, 58, 56, 104, 555];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element >= 80) {
        console.log(element);
    }
    
}
 */

// ===========  ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

/* 
function multiplation(num1, num2, num3){
     const total = num1 * num2 * num3;
     return total;
}

let value = multiplation(32, 34, 50);
console.log(value);
 */

// ============= ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

let phone = {
    brand: "redmi",
    price : 20000,
    ram : '4gb'
}
console.log(phone);

phone.ram = '8gb';
console.log(phone);