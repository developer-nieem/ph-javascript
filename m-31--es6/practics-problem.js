// problem 1.1

// const number = (num1 , num2, num3) => num1 * num2 * num3;
// console.log(number(12,12,12));


// probelm 1.2

/* const title =  `
I am a web developer.
I love to code.
I love to eat biryani.
`
console.log(title); */

// probelm 1.3

/* const number =  (num1 , num2=1) => num1 + num2;

console.log(number(10)); */


// problem 2

const friends =  ['hasanq' , 'masanqqq' , 'kasanq' , 'tasannnnn'];

const friendName = allname =>{
    
    let evenFriend = [];
    
    for (let i = 0; i < allname.length; i++) {
        const element = allname[i];
          
        if(element.length % 2 == 0){
            evenFriend.push(element);
        }
    }

    return evenFriend;
}

console.log(friendName(friends));