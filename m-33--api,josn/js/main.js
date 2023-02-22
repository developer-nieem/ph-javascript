function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => workMpre(data))
}

function workMpre(data){
    console.log(data);
}