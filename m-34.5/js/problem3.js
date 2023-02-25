
const loadAllCuntry =  () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayRegion(data))
}

// loadAllRegion(data.region)

loadAllCuntry()

const displayRegion = countrys =>{
    const selectOption = document.getElementById('select-option');

    const capitalSelectOption = document.getElementById('capital-select-option');

    const languageSelectOption =  document.getElementById('language-select-option');

    countrys.forEach(country => {
        // loadAllRegion(country.region);
        const option =  document.createElement('option');
        option.innerText = ` ${country.region} `
        selectOption.appendChild(option);
        
        // get capital name
        const optionForCapital =  document.createElement('option');
        optionForCapital.innerText = ` ${country.capital} `
        capitalSelectOption.appendChild(optionForCapital);
        
        // get language name
       
        const optionForLanguage =  document.createElement('option');
        optionForLanguage.innerText = ` ${country.languages} `
        
        languageSelectOption.appendChild(optionForLanguage);
        
    });
    
}

// const displayCapital = countrys =>{
//     const selectOption = document.getElementById('select-option');
//     countrys.forEach(country => {
//         // loadAllRegion(country.region);
//         const option =  document.createElement('option');
//         option.innerText = ` ${country.region} `
//         selectOption.appendChild(option);
//     });
    
// }


/* const loadAllRegion =  regionName => {
    const url =`https://restcountries.com/v3.1/region/${regionName}`;
    fetch(url).then(res => res.json()).then(data => displayRegion(data))
}

const displayRegion = (showRegion) => {
    console.log(showRegion);
    document.getElementById('show-region').innerText = showRegion;
} */



