/* const loadMealDetails = (cetegory) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${cetegory}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals))
    .catch(erorr => console.log(erorr))
}; */

const loadMealDetails = async (cetegory) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${cetegory}`;
    try{
        const res =  await fetch(url);
    const data =  await res.json();
    displayMealDetails(data.meals)
    }catch(erorr){
        console.log(erorr);
    }
}

loadMealDetails("rice");

const displayMealDetails = (meals) => {
  // console.log(mealsItem.meals[0]);

  const cardSection = document.getElementById("card-section");

  cardSection.innerText = " ";

  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" >
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions}</p>
          <!-- Button trigger modal -->
        <button onclick="mealModalBtn(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Details
            </button>
        </div>
        `;
    cardSection.appendChild(div);
  });
};

const searchBtn = () => {
  const searchField = document.getElementById("search-field").value;
  console.log(searchField);
  loadMealDetails(searchField);
};

const mealModalBtn =  (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url).then(res => res.json()).then(data => showDetailsOnModal(data.meals[0]))
}

const showDetailsOnModal = showModal =>{

    const modalTitle =  document.getElementById('staticBackdropLabel');
    modalTitle.innerText = showModal.strMeal;

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML =  `
     <img class="img-fluid" src= " ${showModal.strMealThumb}" />
    `

}

