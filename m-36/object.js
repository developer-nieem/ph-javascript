// Object literal syntex

/* const user = {
 name: 'hasan',
 job : 'govt'
}
 */
//  es6 classes 

class User {
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName =  lastName;
    }
}

const user1 = new User('jhon' , 'due');
const user2 = new User('hasan' , 'mia');

console.log(user2);