
// deposit part 

document.getElementById('deposit-btn').addEventListener('click' , function(){
    
    // get value from deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositInputValueString = depositInput.value;
    const depositInputValue = parseFloat(depositInputValueString);
  
    

    // make blank input box after submit a value 
    depositInput.value= '';

    // validation wrong 
    if ( isNaN(depositInputValue)) {
        alert('put your money')
        return;
    }
   
    // get deposit blance 
    const depositBlance = document.getElementById('deposit-blance');
    const depositBlanceValueString = depositBlance.innerText;
    const depositBlanceValue =  parseFloat(depositBlanceValueString);


    // calculate current deposit balance and that deposit now
    const currentdeposit = depositBlanceValue + depositInputValue;

    // assign deposit balance in current deposit blance 
    depositBlance.innerText = currentdeposit;

    // get total balance 
    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalValueSrtring = balanceTotal.innerText;
    const balanceTotalValue =  parseFloat(balanceTotalValueSrtring);

    // calculate deposit balance and main balance
    const totalBlance =  balanceTotalValue + depositInputValue;
    balanceTotal.innerText = totalBlance;
})


// withdraw part 

document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get withdraw input value 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValueString = withdrawInput.value;
    const withdrawInputValue = parseFloat(withdrawInputValueString);
    
    // make blank input box after submit a value 
    withdrawInput.value= ''; 

    // validation wrong 
    if ( isNaN(withdrawInputValue)) {
        alert('put your withdraw money')
        return;
    }
   

    //  get withdraw blance value
    const withdraBlance= document.getElementById('withdraw-blance');
    const withdraBlanceValueString = withdraBlance.innerText;
    const withdraBlanceValue =parseFloat(withdraBlanceValueString);

    //  calculate current withdraw balance and that withdraw now
    const currentWithdraw =  withdraBlanceValue + withdrawInputValue;
    withdraBlance.innerText =  currentWithdraw;

    // get total balance 
    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalValueSrtring = balanceTotal.innerText;
    const balanceTotalValue =  parseFloat(balanceTotalValueSrtring);

     // calculate withdraw balance and reduce main balance
     const totalBlance =  balanceTotalValue - withdrawInputValue;
     balanceTotal.innerText = totalBlance;

})