
const watchTime =  () => {
    let count = 0;
    return function(){
        count++
        return count
    }
}

const see =  watchTime();
console.log(see());
console.log(see());
console.log(see());