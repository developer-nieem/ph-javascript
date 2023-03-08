
const showNumberCount = document.getElementById('show-count');

let count = 0;
document.getElementById('start').addEventListener('click', function(){
    
   const intervalId = setInterval(() =>{
        showNumberCount.innerText = ++count;
        
    }, 1000);
    document.getElementById('stop').addEventListener('click', function(){
        clearInterval(intervalId);
    })
})

document.getElementById('reset').addEventListener('click', function(){
    showNumberCount.innerText =  0;
})

// let count =  0 ;
// let id ;

// document.getElementById('start').addEventListener('click', function(){
// id = setInterval(() => {
//     showNumberCount.innerText = count;
//     count++;
// }, 1000);

// })

// document.getElementById('stop').addEventListener('click', function(){
// clearInterval(id);

// })

