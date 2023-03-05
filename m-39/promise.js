
const getData = new Promise( (resolve , reject) =>{
    const math =  Math.random()*10;
    console.log(math);
    if(math < 5){
        console.log('5000');
    }else{
        console.log('not found');
    }
})

getData
.then(data => console.log(data))
.catch(err => console.error('ERR:', err));