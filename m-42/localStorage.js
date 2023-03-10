localStorage.setItem('drinks' , 'water');
localStorage.getItem('drinks');
localStorage.removeItem('drinks');
localStorage.clear()

// NB. any value if you set localstorage its make string always 


// how to set object

// setp 1
const persion =  {name: 'nieem', age:25, job: 'no'};

// step 2 

const convertString =  JSON.stringify(persion);
// step 3
localStorage.setItem('persion' , convertString);

// if get this and see object then make parse

JSON.parse(convertString)