
function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(users){

    const ul = document.getElementById('list-item');

    for (const user of users) {
        
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);

    }

}