
let makeStyles = document.querySelectorAll('section');

for (const design of makeStyles) {
    
    design.style.border= "1px solid blue";
    design.style.marginBottom= "15px";
    design.style.backgroundColor = "red";
    
}

const placeContainer = document.getElementById('place-design');
console.log(placeContainer);
placeContainer.classList.add('bg-color');
// placeContainer.classList.remove('bg-color');
