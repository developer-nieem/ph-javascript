
const loadPhoneData =  async(searchText) => {
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneData(data.data);
}
loadPhoneData('max')

const displayPhoneData = phones =>{
    console.log(phones);
    const phoneCard =  document.getElementById('phones-card');
    phoneCard.innerText = '';

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
    });
}

document.getElementById('seacrh-btn').addEventListener('click' , function(){
    const inputFiled =  document.getElementById('search-filed').value;
    loadPhoneData(inputFiled);
})