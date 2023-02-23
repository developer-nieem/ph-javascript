
fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => displayComments(data))


function displayComments(comments){

        const commentSection = document.getElementById('comment-srction');
        for (const comment of comments) {
            const div = document.createElement('div');
            div.classList.add('comment');
            div.innerHTML = `
            <h4>comment id: ${comment.postId}</h4>
            <h4>id: ${comment.id} </h4>
            <h3>name: ${comment.name}</h3>
            <h5><i>email: ${comment.email}</i></h5>
            <p>body : ${comment.body}</p>
            `
            commentSection.appendChild(div)
        }
}