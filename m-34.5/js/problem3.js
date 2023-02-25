
const loadAllCuntry =  () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayCountry(data))
}

// loadAllRegion(data.region)

loadAllCuntry()

const displayCountry = countrys =>{
    countrys.forEach(country => {
        // loadAllRegion(country.region);
        document.getElementById('show-region').innerText = country.region;
        
    });
    
}

/* const loadAllRegion =  regionName => {
    const url =`https://restcountries.com/v3.1/region/${regionName}`;
    fetch(url).then(res => res.json()).then(data => displayRegion(data))
}

const displayRegion = (showRegion) => {
    console.log(showRegion);
    document.getElementById('show-region').innerText = showRegion;
} */



