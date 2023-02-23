
fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(Photodata => displayPhoto(Photodata))

function displayPhoto(photos){

    const photosSection = document.getElementById('photos-srction');

    for (const photo of photos) {
        
        const div =  document.createElement('div');
            div.classList.add('photo');
        div.innerHTML= `
        <h4>album id: ${photo.albumId}</h4>
        <h4>id: ${photo.id} </h4>
        <h3>title: ${photo.title}</h3>
        <img src="${photo.url} " / >
        <img src="${photo.thumbnailUrl} " / >
        `
        photosSection.appendChild(div);
    }
}