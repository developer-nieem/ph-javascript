
/* var names= ['hasan', 'kasan', 'lasan', 'masan'];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    
    if (name == 'lasan') {
        break
    }

    console.log(name);
} */

var numbers = [54, 68, 43, 57, 79, 69, 59, 87, 95];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    
    if( number > 59){
        continue;
    }
    console.log(number);
}