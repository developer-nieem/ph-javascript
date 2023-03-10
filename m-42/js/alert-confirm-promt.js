
const alertme =() =>{
    alert('are you in the website')
}


const confirmAll =() =>{
 const value =    confirm('are you in the website');

 if (value === true) {
    console.log('goood');
 }else{console.log('bad');}
}

const getName =  () => {
   const value = prompt('give me your name');

    if (value === null) {
        console.log('why');
    }else{
        console.log(value, 'thank you');
    }
}