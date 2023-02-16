
function getInnerTextFromElement(id){
    const getElement =   document.getElementById(id).innerText;
   return parseFloat(getElement);
     
    
}



function setInformationOnTable(productName ,slnumber, firstPrice , firstQty , totalFirstProducts){
    const getProductName =  document.getElementById(productName).innerText;
    const getTableBody =   document.getElementById('table-show-list');
    const tr =  document.createElement('tr');

    tr.innerHTML = `
        <th>${slnumber}</th>
        <td>${getProductName}</td>
        <td>${firstPrice}</td>
        <td>${firstQty}</td>
        <td>${totalFirstProducts}</td>
    `
    getTableBody.appendChild(tr);
}

let srialNumber=0 ;

document.getElementById('first-cart-btn').addEventListener('click' , function(){
//   const getPriceString =   document.getElementById('first-price').innerHTML;
//   const getPrice =  parseInt(getPriceString)

    const firstPrice  = getInnerTextFromElement('first-price');
    const firstQty  = getInnerTextFromElement('first-qty');
    
    const totalFirstProducts = firstPrice * firstQty;
    
    srialNumber += 1;
    setInformationOnTable('first-product-name',srialNumber, firstPrice , firstQty , totalFirstProducts)

    // const getProductName =  document.getElementById('first-product-name').innerText;
    // const getTableBody =   document.getElementById('table-show-list');
    // const tr =  document.createElement('tr');
    // tr.innerHTML = `
    //     <th>${1}</th>
    //     <td>${getProductName}</td>
    //     <td>${firstPrice}</td>
    //     <td>${firstQty}</td>
    //     <td>${totalFirstProducts}</td>
    // `
    // getTableBody.appendChild(tr);

})