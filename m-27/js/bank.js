
// deposit part 

document.getElementById('deposit-btn').addEventListener('click' , function(){

    // deposit input box
    const depositInput = document.getElementById('deposit-input');
    const depositValueString = depositInput.value;
    const depositValue =  parseFloat(depositValueString);

    // after update input value input box make blank
    depositInput.value = '';

    // deposit amount update 
    const depositBlance =  document.getElementById('deposit-blance');
    const depositUpdateBlanceString = depositBlance.innerText;
    const depositUpdateBlance = parseFloat(depositUpdateBlanceString)

    // Update deposit current blance
    const currentDepositTotal =  depositUpdateBlance + depositValue
    depositBlance.innerText = currentDepositTotal ;
    

    // Blance total update 
    const blanceTotal =document.getElementById('blance-total');
    const blanceTotalUpdateString =  blanceTotal.innerText;
    const blanceTotalUpdate = parseFloat(blanceTotalUpdateString);

    //  Blance total calculation
    const currentBlanceTotal =  blanceTotalUpdate + depositValue  ;
    blanceTotal.innerText = currentBlanceTotal;

})

// withdraw amount 

document.getElementById('withdraw-btn').addEventListener('click', function(){
    // withsraw input box
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValueString =  withdrawInput.value;
    const withdrawValue =  parseFloat(withdrawValueString);
    
    // after update input value input box make blank
    withdrawInput.value= '';

    // withdraw current blance
    const withdrawBlance = document.getElementById('withdraw-blance');
    const updateWithdrawBlanceString =  withdrawBlance.innerText;
    const updateWithdrawBlance =  parseFloat(updateWithdrawBlanceString);

    // withdraw and input value updated 
    const currentWithdrawBlance = withdrawValue + updateWithdrawBlance;
    withdrawBlance.innerText = currentWithdrawBlance;


     // Blance total part 
     const blanceTotal =document.getElementById('blance-total');
     const blanceTotalUpdateString =  blanceTotal.innerText;
     const blanceTotalUpdate = parseFloat(blanceTotalUpdateString);

    //  calculation total balance to withdraw blance
    const leftTotalBlance =  blanceTotalUpdate - withdrawValue
    blanceTotal.innerText = leftTotalBlance;
})