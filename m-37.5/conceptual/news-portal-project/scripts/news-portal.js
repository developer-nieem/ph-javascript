
const getCategoryData =() =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => displayCategoryItems(data.data.news_category));
}

getCategoryData();
const displayCategoryItems =  (data) => {
    // console.log(data);
    const categoryItems =  document.getElementById('category-items');

    data.forEach(singleItem => {
        
        categoryItems.innerHTML += ` <p> <a href="#" onclick= "fetchItemLink( '${singleItem.category_id}' , '${singleItem.category_name}' )"> ${singleItem.category_name}</a> </p> `
    });
}


// show dynamicly category name and items count

const fetchItemLink =  (category_id, categoryName ) =>{
    const url =  `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayItemInfo(data.data , categoryName))
}


const displayItemInfo =  (data, categoryName) =>{
    
      document.getElementById('items-count').innerText = data.length;
      document.getElementById('category-name').innerText = categoryName;

    //   news section
    const newsSection =  document.getElementById('news-section');
    document.getElementById('news-section').innerText = '';
      data.forEach(news => {
      //  console.log(news);
        newsSection.innerHTML += ` 
        <div class="card mb-3" ">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${news.image_url}" class="img-fluid " >
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text">${news.details.slice(0, 200)}....</p>
             
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                    <div class="d-flex gap-2 ">
                        <img src="${news.author.img}" style="width: 40px ; height: 40px" class="rounded-circle">
                        <div>
                        <h4>${news.author.name ? news.author.name : "No name"}</h4>
                        <p>  ${news.author.published_date ? news.author.published_date:"no date"}</p>
                        </div>
                    </div>
                    <div>
                    <p>view:<b>${news.total_view? news.total_view : "no view"}</b></p>
                    </div>
                    <div>
                        <p>star: <b>${news.rating.number}</b></p>
                    </div>
                    <div>
                            <button onclick="LoadPostDetailsData('${news._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailsModal">See more</button>
                    </div>
            </div>
          </div>
        </div>
      </div>
        `
      })
    
}


// post details with modal

const LoadPostDetailsData = (id) =>{
  // console.log(id);

  const url =  `https://openapi.programming-hero.com/api/news/${id}`;
  

  fetch(url)
  .then(res => res.json())
  .then(data => ShowostDetailsData(data.data[0]))
  .catch(error => console.log(error));
  
}

const ShowostDetailsData = (data) =>{

  console.log(data);
    const modaBody  =  document.getElementById('modal-body');
    console.log(modaBody);
  
    modaBody.innerHTML = `
    <div class="card mb-3" ">
    <div class=" g-0">
      <div class="col">
        <img src="${data.image_url}" class="img-fluid " >
      </div>
      <div class="col">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">${data.details.slice(0, 200)}....</p>
         
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2 ">
                    <img src="${data.author.img}" style="width: 40px ; height: 40px" class="rounded-circle">
                    <div>
                    <h4>${data.author.name ? data.author.name : "No name"}</h4>
                    <p>  ${data.author.published_date ? data.author.published_date:"no date"}</p>
                    </div>
                </div>
                <div>
                <p>view:<b>${data.total_view? data.total_view : "no view"}</b></p>
                </div>
                <div>
                    <p>star: <b>${data.rating.number}</b></p>
                </div>
                <div>
                        <button onclick="LoadPostDetailsData('${data._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailsModal">See more</button>
                </div>
        </div>
      </div>
    </div>
  </div>

    `

}