
// https://restcountries.com/v3.1/all
const showCountry =  () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

showCountry()

function displayCountry(countrys){
    const countrySection = document.getElementById('country-section');

    countrys.forEach(contry => {
        // console.log(contry.cca2);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Country Name : <i><u>${contry.name.common}</u></i> </h3> 
        <p>capital name : <i><u>${contry.capital ? contry.capital[0]: 'no capital'} </u></i> </p>
        <button onclick="loadCountryDetails( '${contry.cca2}')">Details</button>
        `
        countrySection.appendChild(div)
    });

}

function loadCountryDetails(details) {
   
    const url = `https://restcountries.com/v3.1/alpha/${details}`
    fetch(url).then(res => res.json()).then(data=> showDisplayDetails(data))
}

const showDisplayDetails = load => {
        // console.log(load[0].flags.png);
        const showDetails =  document.getElementById('show-details');
        showDetails.innerHTML = `
            <h2>name : ${load[0].name.common}</h2>
            <p>${load[0].name.official}</p>
            <img src="${load[0].flags.png}" />
            
        `

}