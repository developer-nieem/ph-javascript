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
/* 
function namata(number){
    
    for (let i = 1; i <= 10; i++) {
        let element = i;
        let total = element +'x'+ number+ '=' + element*number;
        console.log(total);
    }
    
}

let value  = 5;
namata(value);

 */


// =============  এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।


/*     
    function largestNumber(numbers){
    let large = []
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element> 5){
            large.push(element);
        }
        
    }
    return large.length;
}
let value = largestNumber([-1,2,-3,4,5,6,-7,8,-9,10]);
var output = value;
console.log(output);

 */


// ======== তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।
/* 
function friends(name){

    let largeName = '';
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        if (element.length > largeName.length ) {
            largeName = element;
        }
        
    }
    
   return largeName.split('').reverse().join('')
}

let names = ['elisa' ,'ami mohammad nieem'];
let output =  friends(names);
console.log(output);
 */

// ========== এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।

/* let milimeter = 1000;
let sum =  milimeter /1000

console.log(sum);
 */

// =========== একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।

/* 
function humanDetails(person){

    let lowsetAge = person[0];
        for (let i = 0; i < person.length; i++) {
            const element = person[i];
            if (element.age <  lowsetAge.age) {
                
                lowsetAge = element;
            }
        }
        console.log(lowsetAge);
}

let human= [ {name:'sakib', age:30}, {name:'samiul', age:20}, {name:'sahid', age:50}, {name:'samin', age:10} ]

humanDetails(human); */



//  বেসিক জাভাস্ক্রিপ্ট এর সিম্পল Problems(এসাইন্মেন্ট কিভাবে করতে হবে তার ধারণা পাওয়া যাবে এগুলো সমাধান করলে)

// ===================ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

/* 
function radianToDegree(radian){
        const sum = radian * (180/3.14159);
        const  result = sum.toFixed(2); 
        return parseFloat(result);
}

const output = radianToDegree(10);
console.log(output);
 */


// ========== ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।

/* 
function isJavaScriptFile(string){

    if (string.endsWith('.js')) {
            return true;
    }else{
        return false;
    }
}

const output = isJavaScriptFile("app.js.png")

console.log(output);

 */

// =========== Problem 3:  oilPrice  ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।
/* 
function oilPrice(dejelQty, pettolQty, octenQty){
        const dejel = dejelQty * 114;
        const pettol = pettolQty * 130;
        const octen = octenQty * 135;
        
        const total = dejel + pettol + octen;
        return total;
}

const output = oilPrice(30,20,10);

console.log(output);
 */

// ===========  তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
/* 
function isBestFriend(object1 , object2){

    if(object1.friend === object2.name && object1.name === object2.friend){
        return true;
    }else{
        return false;

    }
}


var output = isBestFriend(
    { name: "abul", friend: "kabul" },
    { name: "kabul", friend: "sabul" }
    );

console.log(output);

 */

//  ======== Problem 4:  publicBusFare


function publicBusFare (pesenger){
    if (typeof pesenger !== "number" || pesenger < 50) {
        return "please provide valid values";
    }

    let remainingOwnBus = pesenger % 50;

    let RemaingMicroBus = remainingOwnBus % 11;

    let totalCost = RemaingMicroBus * 250; 
    return totalCost
}

const output = publicBusFare(365);
console.log(output);