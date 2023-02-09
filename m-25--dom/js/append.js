
const mainContainer =document.getElementById('main-container');


const section = document.createElement('section');
// section.innerHTML = "<h2>hello</h2>"
mainContainer.appendChild(section);

const ul = document.createElement('ul');
section.appendChild(ul);

const li = document.createElement('li');
li.innerText = "item1";
ul.appendChild(li);
const li1 = document.createElement('li');
li1.innerText = "item2";
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = "item3";
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = "item4";
ul.appendChild(li3);

// another way

const sectionShop = document.createElement('section');
sectionShop.innerHTML = `
    <ul>
    <li>shop1</li>
    <li>shop1</li>
    <li>shop1</li>
    <li>shop1</li>
    <li>shop1</li>
    <li>shop1</li>
    <li>shop1</li>
    </ul>

`
mainContainer.appendChild(sectionShop);

sectionShop.classList.add('bg-color');