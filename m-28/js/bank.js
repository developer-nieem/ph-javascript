
// document.getElementById('deposit-btn').addEventListener('click', function(){
   
//     const depositInput = document.getElementById('deposit-input');
//     const depositInputValueString = depositInput.value;
//     const depositInputValue =  parseFloat(depositInputValueString);

//     depositInput.value = '';

//    const depositBlance= document.getElementById('deposit-blance');
//    const depositBlanceUpdateString= depositBlance.innerText;
//    const depositBlanceUpdate = parseFloat(depositBlanceUpdateString);


//    const currentDepositBalance =  depositBlanceUpdate + depositInputValue;
//    depositBlance.innerText = currentDepositBalance;

//    const blanceTotal = document.getElementById('blance-total');
//    const blanceTotalUpdateString = blanceTotal.innerText;
//    const blanceTotalUpdate = parseFloat(blanceTotalUpdateString);

//    const updateCurrentTotalBalance = blanceTotalUpdate + depositInputValue;
//    blanceTotal.innerText =  updateCurrentTotalBalance
// })

// // withdraw

// document.getElementById('withdraw-btn').addEventListener('click', function(){
   
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawInputValueString = withdrawInput.value;
//     const withdrawInputValue =  parseFloat(withdrawInputValueString);

//     withdrawInput.value = '';

//    const withdrawBlance= document.getElementById('withdraw-blance');
//    const withdrawBlanceUpdateString= withdrawBlance.innerText;
//    const withdrawBlanceUpdate = parseFloat(withdrawBlanceUpdateString);


//    const currentWithdrawBalance =  withdrawBlanceUpdate + withdrawInputValue;
//    withdrawBlance.innerText = currentWithdrawBalance;

//    const blanceTotal = document.getElementById('blance-total');
//    const blanceTotalUpdateString = blanceTotal.innerText;
//    const blanceTotalUpdate = parseFloat(blanceTotalUpdateString);

//    const updateCurrentTotalBalance = blanceTotalUpdate - withdrawInputValue;
//    blanceTotal.innerText =  updateCurrentTotalBalance
// })

// Get value from input field


document.getElementById('deposit-btn').addEventListener('click', function(){

    const depositInputValue =  getValueFromInput('deposit-input');

    const depositBlanceUpdate = getTextElementValueById('deposit-blance');

    // calculate and set value deposit balance 
    const totalDepositBlance =  depositBlanceUpdate + depositInputValue;
    setValueTextElementById('deposit-blance', totalDepositBlance);

    // total balance 
    const totalBalanceElement =  getTextElementValueById('blance-total');

    // calculate and set value total balance 
    const totalBalance = totalBalanceElement + depositInputValue;
    setValueTextElementById('blance-total', totalBalance);

})


// withdraw

document.getElementById('withdraw-btn').addEventListener('click', function(){

   
        const withdrawInputValue =  getValueFromInput('withdraw-input');
        const withdrawBlanceUpdate = getTextElementValueById('withdraw-blance');
        
        const totalWithdrawBlance =   withdrawBlanceUpdate + withdrawInputValue;
        setValueTextElementById('withdraw-blance', totalWithdrawBlance);
        
       
        const totalBalanceElement =  getTextElementValueById('blance-total');
    
       const reduceTotalBalanceElement = totalBalanceElement - withdrawInputValue;
        
        setValueTextElementById('blance-total', reduceTotalBalanceElement);
  
   
})
   


