/* 
(১.) নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?

(২.) যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 



(৩.) ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 



(৪.) card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 

.

(৫.) কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 



৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে চেষ্টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

.

(৭). একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 

৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
*/


// h2 make color lighblue --- solved-2
const changeColorH2 = document.getElementsByTagName('h2');
for (const perItem of changeColorH2) {
    perItem.style.color = 'lightblue'
}

// backpack id make background color tomato  ---- solved -3

const backpackId =  document.getElementById('backpack');
backpackId.style.backgroundColor = "tomato";
backpackId.style.padding = "15px";


// card class make border radius ------ solved - 4

const cardItems = document.getElementsByClassName('card');
for (const cardItem of cardItems) {
    cardItem.style.borderRadius = '30px';
}

// make a function for click handler -----  solved - 5
function showSomething(){
    console.log("you clicked a button");
}


//  hide card when click buy now button   unsolved -- 6

const removeButton = document.getElementsByClassName('btn');
for (const perBtn of removeButton) {
    perBtn.addEventListener('click' , function(event){
        // event.target.parentNode.removeChild(event.target)
        // remove card
       event.target.parentNode.parentNode.remove()
    })
}

// if click buy now button then remove this card
/* document.getElementById('shoes-btn1').addEventListener('click' , function(){
   const cardRemove =  document.getElementById('shoes-card1');
   cardRemove.style.display = 'none';

}) */

// if click any buy now button remove all card
/* const allBuyNowBtn = document.getElementsByClassName('panda-btn-buy-now');

for (const perBtn of allBuyNowBtn) {
    perBtn.addEventListener('click' , function(){
        const cardRemove =  document.getElementsByClassName('card');
        for (const perCard of cardRemove) {
            perCard.style.display = 'none'
        }
        
    })
} */


// input value validation check  solved - 7

const inputValue = document.getElementById('exampleInputEmail1');
inputValue.addEventListener('keyup' , function(){
    const inputText = inputValue.value;

    const fromBtn = document.getElementById('form-btn');

    if(inputText === 'email'){
        fromBtn.removeAttribute('disabled');
    }else{
        fromBtn.setAttribute('disabled' , true)
    }
})


// change image when the mouse enter a image --- solved - 8 

const imagechange = document.getElementById('image-change')
imagechange.addEventListener('mouseenter' , function(){
    
    imagechange.src = "./images/shoes/shoe-2.png";
   
})

// doubleclick change bg color ---- solved - 9

const bgChange = document.getElementById('change-bg-color');
bgChange.addEventListener('dblclick' , function(){
    bgChange.style.backgroundColor ='blue';
} )

// function changeBg(){
//     document.getElementById('change-bg-color').style.backgroundColor = 'red';
// }
 