const loadPhoneData = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneData(data.data);
}

loadPhoneData('Pro Max')

const displayPhoneData = phones =>{
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
                    </div>
            </div>
        
        `
        phonesCard.appendChild(div);
    });
    loadingDataSpin(false);
}

// Search phones name
document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field').value;
    loadPhoneData(searchField);

    loadingDataSpin(true);
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