const image = [
    "images/pic-1.jpg",
    "images/pic-2.jpg",
    "images/pic-3.jpg",
    "images/pic-4.jpg",
    "images/pic-5.jpg",
    "images/pic-6.jpg",
    "images/pic-7.jpg",
    "images/pic-8.jpg",
    "images/pic-9.jpg"
    
]

let imageCount = 0;
 const getImage = document.getElementById('image'); 
setInterval(() =>{
    if(imageCount === image.length){
        imageCount = 0;
    }
    const imageIndex =  image[imageCount];
    // getImage.setAttribute('src', imageIndex)
    getImage.src = imageIndex
    // console.log(imageIndex);
    imageCount++ ;
    
},1000)