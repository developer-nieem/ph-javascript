
const allSurah2 = [];

const qouranDataLoad =  () =>{
    fetch('js/file.json')
    .then(res => res.json())
    .then(data=> displayQuran(data.data.surahs))
}

qouranDataLoad();

const displayQuran =  allSurah => {
    // console.log(allSurah);

    const mainContainer = document.getElementById('main-container');
    allSurah.forEach(surah => {

        allSurah2.push(surah.ayahs);

        const div =  document.createElement('div');
        div.innerHTML = `
                <div class="p-4 card h-100">
                        <b>Surah #${surah.number}</b>
                     <div class="card-body">
                          <h5 class="card-title"> ${surah.name}</h5>
                          <h5 class="card-title"> ${surah.englishName} (<sub>${surah.englishNameTranslation}</sub>) </h5>
                          <p></p>
                    </div>
                    <div class="card-footer bg-white text-center">
                    <button onclick="openAyat(${surah.number -1})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#surahModal">
                        Read
                    </button>
                       
                    </div>
                 </div>
        `
        mainContainer.appendChild(div);

        loadComplate(false);
    });
}

// ayat

srial = 0;
const openAyat = (ayats) =>{

    // console.log(ayats);

const mySurah =  allSurah2[ayats];
const suraShow1 =  document.getElementById('surah-show');
document.getElementById('surah-show').innerText = '';
    mySurah.forEach(oneSura => {
        // console.log(oneSura);
       const div =  document.createElement('div');
       div.innerHTML= `
        <div class = "bg-light my-2 p-4 ">
        <h2 class="lh-lg text-end"> <sub class="btn btn-primary ">${oneSura.numberInSurah}</sub> ${oneSura.text} </h2> <br><br>
        <audio controls >
            <source src="${oneSura.audio}" type="audio/ogg">
            
        </audio>
        </div>
       `
       suraShow1.appendChild(div);
    })
}

// Loading spinner

const loadingSpinner =  () => {
    loadComplate(true);
}

const loadComplate = (isLoading) =>{
    if (isLoading) {
        const hideSpinner =  document.getElementById('loading-spinner');
        hideSpinner.classList.remove('d-none');
    }else{
        const hideSpinner =  document.getElementById('loading-spinner');
        hideSpinner.classList.add('d-none');
    }
}


