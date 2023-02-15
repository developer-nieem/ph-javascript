
// qty update and descrease function
function calculateCart(id, isIncrease){
    const getInputValueByIdString =  document.getElementById(id).value;
    const getInputValue =  parseInt(getInputValueByIdString);
    
    let updateQty;
    if(isIncrease){
        updateQty =  getInputValue + 1; 
    }else{
        updateQty = getInputValue - 1; 
    }

    document.getElementById(id).value = updateQty;
    return updateQty;
}

// item price update function
function totalPhonePrice(id , fixedPrice , value){
   return document.getElementById(id).innerText = fixedPrice * value;
}

// set subtotal price function
function getTotalPrice(){
    const getPhonePriceString = document.getElementById('phone-price').innerText;
    const getPhonePrice =  parseInt(getPhonePriceString);
    const getCasePriceString =  document.getElementById('case-price').innerText;
    const getCasePrice = parseInt(getCasePriceString);

    // subtotal price 
    const subtotal =  getPhonePrice + getCasePrice;
    document.getElementById('subtotal-price').innerText = subtotal;

    // tax price
    const tax =  subtotal * 0.1
    const getTaxtElement =  document.getElementById('tax-price').innerText = parseFloat(tax.toFixed(2));

    // all total price 
     const totalPrice  = subtotal + getTaxtElement;
     document.getElementById('total-price').innerText = totalPrice;
}


document.getElementById('phone-plus-btn').addEventListener('click' , function(){
    // const getInputValueByIdString =  document.getElementById('phone-qty').value;
    // const getInputValue =  parseInt(getInputValueByIdString);
    
    // const updateQty =  getInputValue + 1; 
    // document.getElementById('phone-qty').value = updateQty;

    const increaseTotalQty =  calculateCart('phone-qty', true);

    // phone price update 
    totalPhonePrice('phone-price', 1219 , increaseTotalQty);
   
    // set subtotal price 
    getTotalPrice()
   

    // document.getElementById('phone-price').innerText = 1219 * totalQty;
})

document.getElementById('phone-minus-btn').addEventListener('click' , function(){
    // const getInputValueByIdString =  document.getElementById('phone-qty').value;
    // const getInputValue =  parseInt(getInputValueByIdString);
    
    // const updateQty =  getInputValue - 1; 
    // document.getElementById('phone-qty').value = updateQty;

   const decraseTotalQty =  calculateCart('phone-qty', false);

   // phone price decrease 
    totalPhonePrice('phone-price', 1219 , decraseTotalQty);
    
    // set subtotal price 
    getTotalPrice()
    // document.getElementById('phone-price').innerText = 1219 * updateQty;
})

document.getElementById('case-plus-btn').addEventListener('click' , function(){
  
   const increaseCaseTotalQty =  calculateCart('case-qty', true);
   
   // Case price update 
    totalPhonePrice('case-price', 59 , increaseCaseTotalQty);
    
    // set subtotal price 
    getTotalPrice()
    
})

document.getElementById('case-minus-btn').addEventListener('click' , function(){
  
  const  decreaseCaseTotalQty =  calculateCart('case-qty', false);
  
 // Case price update 
  totalPhonePrice('case-price', 59 , decreaseCaseTotalQty);
  
  // set subtotal price 
  getTotalPrice()

})

