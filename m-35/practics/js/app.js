const loadPhoneData = async(searchText , itemLimite) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneData(data.data , itemLimite);
}

loadPhoneData('Pro Max')

const displayPhoneData = (phones , itemLimite) =>{
    const phonesCard =  document.getElementById('phones-card');
    // remove defult card when search
    phonesCard.innerText = '';

    // no phone found
      const noPhone=   document.getElementById('noPhone');
      console.log(noPhone);
        if(phones.length === 0){
            noPhone.classList.remove('d-none')
        }else{
            noPhone.classList.add('d-none')
        }

        // only 10 products show
            const phoneItemShow =  document.getElementById('phoneItemShow');
        if(itemLimite && phones.length > 10){
            phones=phones.slice(0,10);
            phoneItemShow.classList.remove('d-none');
        }else{
            phoneItemShow.classList.add('d-none');
        }


    // load phone data
    phones.forEach(phone => {
        const div =  document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `  
            <div class="p-4 card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button onclick="showPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal"> Show Details</button>
                    </div>
            </div>
        
        `
        phonesCard.appendChild(div);
    });
    loadingDataSpin(false);
}

// Search phones name
document.getElementById('search-btn').addEventListener('click', function(){
    // const searchField = document.getElementById('search-field').value;
    // loadPhoneData(searchField);

    // loadingDataSpin(true);

    showPhoneItem(10)
})

// show phones item
const showPhoneItem =  (itemLimite) => {
    const searchField = document.getElementById('search-field').value;
    loadPhoneData(searchField , itemLimite);

    loadingDataSpin(true);
}

document.getElementById('phoneItemShow-btn').addEventListener('click' , function(){
    showPhoneItem()
})

// loading data spin 
const loadingDataSpin =  isLoading => {
    const getSpin = document.getElementById('loading-Data-Spin');
    if(isLoading){
        getSpin.classList.remove('d-none');
    }else{
        getSpin.classList.add('d-none');
    }
}


// show phone details on modal 

const showPhoneDetails =  async(id) => {
    const url =  `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data =  await res.json();
    displayInformationInModal(data.data);

}

const displayInformationInModal =  phone =>{
    document.getElementById('phoneDetailsModalLabel').innerText = phone.name
}