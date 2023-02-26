
const loadPhoneData =  async(searchText) => {
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneData(data.data);
}
loadPhoneData('max')

const displayPhoneData = phones =>{
    
    const phoneCard =  document.getElementById('phones-card');
    phoneCard.innerText = '';
    
    // Show phone items only 10
    phones = phones.slice(0, 10);

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
            </div>
      </div>
        `
        phoneCard.appendChild(div)
         // loading phones
     
    });
    loadingData(false);
}

document.getElementById('seacrh-btn').addEventListener('click' , function(){
    const inputFiled =  document.getElementById('search-filed').value;
    loadPhoneData(inputFiled);

    // loading phones
    loadingData(true);
})

// lodaing spinner before data loading
const loadingData = isLoading => {
    const loadingData =  document.getElementById('loadingData');

    if(isLoading){
        loadingData.classList.remove('d-none');
    }else{
        loadingData.classList.add('d-none');
    }
}