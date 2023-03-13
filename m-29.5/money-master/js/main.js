
document.getElementById('calculate-btn').addEventListener('click', function(){
    
    const getExpensesByClaas =  document.getElementsByClassName('expenses');

    let sum = 0;
   for (const element of getExpensesByClaas) {
        const perValueString =  element.value;
       const perValue =  parseFloat(perValueString);
       element.value = '';
       
       if(isNaN(perValue)  || perValue < 0){
         alert('put vaild number numbers');
         return;
       }
       sum =  sum + perValue
   }

   //    income
    const incomeValueString =  document.getElementById('income').value;
    const incomeValue =  parseFloat(incomeValueString);

    // warning if cost more than income
    if(sum > incomeValue){
        alert('your cost more than income');
        return;
    }

   document.getElementById('total-expens').innerText = sum;

    // //    income
    // const incomeValueString =  document.getElementById('income').value;
    // const incomeValue =  parseFloat(incomeValueString);

    
    if(isNaN(incomeValue)  || incomeValue < 0){
        alert('put your vaild income');
        return ;
    }

    // total expense
    const totalExpensString = document.getElementById('total-expens').innerText;
    const totalExpens =  parseFloat(totalExpensString);

    const leftBalance =  incomeValue - totalExpens;
    document.getElementById('left-balance').innerText =  leftBalance; 


   
})


document.getElementById('save-balance').addEventListener('click' , function(){
    
    // get value from save input 
    const saveInputValueString =  document.getElementById('save-percent').value;
    const saveInputValue= parseFloat(saveInputValueString);
    const makePercent =  saveInputValue / 100;

    document.getElementById('save-percent').value = "";
    if(isNaN(saveInputValue) || saveInputValue < 0 ){
        alert('put number');
        return;
    }else if(saveInputValue > 100){
        alert('cannot put more than 100');
        return;
    }
    // get value from income input 
    const incomeValueString =  document.getElementById('income').value;
    const incomeValue =  parseFloat(incomeValueString);

    // calculation get value and set saving amount 
    const totalSave = incomeValue * makePercent;       
    document.getElementById('saving-amount').innerText = totalSave;

    // get total balance after expense 
    const totalBalanceString =  document.getElementById('left-balance').innerText;
    const totalBalance = parseFloat(totalBalanceString);

    //  get saving amount after calculation
    const savingAmountString =  document.getElementById('saving-amount').innerText;
    const savingAmount =  parseFloat(savingAmountString);

    // calculation for remaining balance 
    const totalRemainingBalance =   totalBalance - savingAmount

    // set ramaining balance
    document.getElementById('remaining-balance').innerText = totalRemainingBalance;

})