


function duplicate(name) {

    let uniqName = []
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        if(uniqName.includes(element) === false){
            uniqName.push(element)
        }
    }
    return uniqName;
}

var allName = ['abul' , 'kabul', 'chabul', 'tabul', 'mabul','abul','mabul', 'chabul','mabul'];
console.log(duplicate(allName));