
const loadPhoneData =  async(searchText , dataLimite) => {
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneData(data.data , dataLimite);
}
loadPhoneData('max')

const displayPhoneData =( phones , dataLimite) =>{
    
    const phoneCard =  document.getElementById('phones-card');
    phoneCard.innerText = '';
    
    // Show phone items only 10
    const showAll = document.getElementById('show-all');
    if(dataLimite && phones.length > 10){
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }else{
        showAll.classList.add('d-none');
    }
    

    // search not found phone
    const noPhone =  document.getElementById('no-phones');
    if(phones.length === 0){
        noPhone.classList.remove('d-none')
    }else{
        noPhone.classList.add('d-none')
    }

    // show phones
    phones.forEach(phone => {
        console.log(phone);
        const div =  document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
        <div class="card h-100 p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="showPhoneDetails('${phone.slug}')" class= "btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Deitails</button>
            </div>
      </div>
        `
        phoneCard.appendChild(div)
         // loading phones
     
    });
    loadingData(false);
}

// Search section
document.getElementById('seacrh-btn').addEventListener('click' , function(){
    // const inputFiled =  document.getElementById('search-filed').value;
    // loadPhoneData(inputFiled);

    // // loading phones
    // loadingData(true);
    loadAllProducts(10)
})

// Press enter by search
document.getElementById('search-filed').addEventListener('keypress' , function(e){
    if(e.key === 'Enter'){
        loadAllProducts(10)
    }
})

// function load all products
const loadAllProducts=  (dataLimite) =>{
    const inputFiled =  document.getElementById('search-filed').value;
    loadPhoneData(inputFiled , dataLimite);

    // loading phones
    loadingData(true);
}

// lodaing spinner before data loading
const loadingData = isLoading => {
    const loadingData =  document.getElementById('loadingData');

    if(isLoading){
        loadingData.classList.remove('d-none');
    }else{
        loadingData.classList.add('d-none');
    }
}

// show all product button
document.getElementById('show-all-btn').addEventListener('click', function(){
    loadAllProducts();
})

// show phone details 

const showPhoneDetails = async(id) => {
    const url =  `https://openapi.programming-hero.com/api/phone/${id}`;
    const res =  await fetch(url);
    const data =  await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => {
    document.getElementById('phoneDetailsModalLabel').innerText = phone.name;
    document.getElementById('phone-details-body').innerHTML = ` 
        <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'no found relase date'}</p>
        <p>Bluetooth: ${phone.others ? phone.others.Bluetooth : 'no found Bluetooth'}</p>
        <p>Display Size: ${phone.mainFeatures ? phone.mainFeatures.displaySize : 'no found displaySize'}</p>
        <p>Memory : ${phone.mainFeatures ? phone.mainFeatures.memory : 'no found memory'}</p>
    
    `
}