
// function postData(){
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => displayPost(data))
// }

// postData()

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => displayPost(data))

function displayPost(posts){
    const postSection =  document.getElementById('post-section');

    for (const post of posts) {
        
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h5>user : ${post.userId} </h5>
        <h2>title : ${post.title}</h2>
        <p>body : ${post.body}</hp>
        `
        postSection.appendChild(div)
    }
}