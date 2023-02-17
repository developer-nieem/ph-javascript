
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
        <td class="total">${totalFirstProducts}</td>
    `
    getTableBody.appendChild(tr);

    // cart item count 
    document.getElementById('count-cart-item').innerText =  slnumber;
    document.getElementById('items-count').innerText =  slnumber;
}

function disabledBtn(btnId){
    const getButton =   document.getElementById(btnId);
    getButton.setAttribute('disabled' , true);
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

 
    disabledBtn('first-cart-btn')
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



document.getElementById('second-cart-btn').addEventListener('click', function(){
    const secondPrice =  getInnerTextFromElement('second-price');
    const secondQty =  getInnerTextFromElement('second-qty');

    const totalSecondPrice  = secondPrice * secondQty;

 srialNumber += 1;
    setInformationOnTable('second-product-name',srialNumber, secondPrice , secondQty , totalSecondPrice)

    disabledBtn('second-cart-btn');
})

document.getElementById('third-cart-btn').addEventListener('click' , function(e){
    // console.log(e.target.parentNode.parentNode.children);
    
    const thirdPriceString =  e.target.parentNode.parentNode.children[2].children[0].innerText;
    const thirdPrice = parseInt(thirdPriceString);

    const thirdQtyString =  e.target.parentNode.parentNode.children[3].children[0].innerText;
    const thirdQty = parseInt(thirdQtyString);

  
  
    const thirdTotal =  thirdPrice * thirdQty;
    // const thirdProductsName =  e.target.parentNode.parentNode.children[0].innerText;
    
    
    srialNumber += 1;
    setInformationOnTable('third-product-name' , srialNumber, thirdPrice , thirdQty , thirdTotal)
    
    disabledBtn('third-cart-btn')
    
})

document.getElementById('fourth-cart-btn').addEventListener('click' , function(e){
    
    const fourthPriceString =  e.target.parentNode.parentNode.children[2].children[0].innerText;
    const fourthPrice = parseInt(fourthPriceString);

    const fourthQtyString =  e.target.parentNode.parentNode.children[3].children[0].innerText;
    const fourthQty = parseInt(fourthQtyString);

  
  
    const fourthTotal =  fourthPrice * fourthQty;
    
    
    srialNumber += 1;
    setInformationOnTable('fourth-product-name' , srialNumber, fourthPrice , fourthQty , fourthTotal);

    disabledBtn('fourth-cart-btn');
})
document.getElementById('fifth-cart-btn').addEventListener('click' , function(e){
    
    const fifthPriceString =  e.target.parentNode.parentNode.children[2].value;
    const fifthPrice = parseInt(fifthPriceString);

    const fifthQtyString =  e.target.parentNode.parentNode.children[3].value;
    const fifthQty = parseInt(fifthQtyString);

  if(isNaN(fifthPrice) || isNaN(fifthQty)){
    alert('put price and qty');
    return;
  }
  
    const fifthTotal =  fifthPrice * fifthQty;
    
    
    srialNumber += 1;
    setInformationOnTable('fifth-product-name' , srialNumber, fifthPrice , fifthQty , fifthTotal);
    
    disabledBtn('fifth-cart-btn')
})

