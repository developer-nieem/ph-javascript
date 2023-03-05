
const showNumberCount = document.getElementById('show-count');

document.getElementById('start').addEventListener('click', function(){
    let count = 0;
   const intervalId = setInterval(() =>{
        showNumberCount.innerText = ++count;

        document.getElementById('stop').addEventListener('click', function(){
            clearInterval(intervalId);
        })
    }, 1000)
})

document.getElementById('reset').addEventListener('click', function(){
    showNumberCount.innerText =  0;
})