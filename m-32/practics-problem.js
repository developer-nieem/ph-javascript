
// probelm 1

const number =  [ 1, 3, 5, 7, 9 ];
const even =  number.map(a=> a + 1);
// console.log(even);

const number2 = [33, 50, 79, 78, 90, 101, 30 ];
const divisible = number2.filter(n => n % 10 === 0 );
// console.log(divisible);

const divisibleWithFind = number2.find(n => n % 10 === 0);
// console.log(divisibleWithFind);

const number3 =  [ 1, 9, 17, 22 ];
const totalSum = number3.reduce((sum, number) => sum + number , 0 );
// console.log(totalSum);

/* const peoples = [
    {name: 'meena', age:20},
    {name: 'raju', age:15},
    {name: 'hasan', age:22}
]

const getAge =peoples.map( people => people.age);
const ageSum = getAge.reduce((sum , n) => sum +n , 0);
console.log(ageSum); */
const peoples = [
    {name: 'meena', age:20},
    {name: 'raju', age:15},
    {name: 'hasan', age:22}
]

const ageSum = peoples.reduce((sum , n) => sum + n.age , 0);
// console.log(ageSum);

// problem access array 

const  student = {
    name : 'nieem',
    age : 26
}

// console.log(student.age);


let data = {
    location:[
        {
            latidue : '34.52, 37.8',
            longitude : '98.52, 58.8',
            city : 'hydarabad',
            country : 'india',
        }
    ]
}

const getCity = data.location[0].city;
console.log(getCity);