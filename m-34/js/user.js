
const showUser =  () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

showUser()
function  displayUser(users){
    console.log(users.results[0].picture.large);
    
    // images
    const image =  document.getElementById('image');
    image.src = users.results[0].picture.large

    // name
    const name  = document.getElementById('name');
    name.innerText =  ` ${users.results[0].name.title} ${users.results[0].name.first} ${users.results[0].name.last}`

    // gender
    const gender =  document.getElementById('gender');
    gender.innerText =  users.results[0].gender
    console.log(users.results[0].gender);
}