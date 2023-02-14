
function getInputValueById(id){
    const depositInput = document.getElementById(id).value;
    const depositInputValue = parseFloat(depositInput);
    document.getElementById(id).value = '';
    return depositInputValue;
    
}
function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueMakeNumber = parseFloat(textValue);
    return textValueMakeNumber;
   
}

function setInnerText(id , value){
    document.getElementById(id).innerText = value;
}


document.getElementById('deposit-btn').addEventListener('click' , function(){
    const inputFieldValue = getInputValueById('deposit-input');
    // validation
    if (isNaN(inputFieldValue)) {
        alert('give valid value');
        return;
    }
    const depositBlance =  getTextValueById('deposit-blance');


    const totalDeposit = depositBlance + inputFieldValue;
    setInnerText('deposit-blance' , totalDeposit);

    const getTotalBalance = getTextValueById('blance-total');

    const totalBalance = getTotalBalance + inputFieldValue;

    setInnerText('blance-total' , totalBalance);
})

document.getElementById('withdraw-btn').addEventListener('click' , function(){
    const withdrawInputFieldValue = getInputValueById('withdraw-input');
   
    // validation
    if (isNaN(withdrawInputFieldValue)) {
        alert('give valid value');
        return;
    }

    const withdrawBlance =  getTextValueById('withdraw-blance');


    const totalWithdraw = withdrawBlance + withdrawInputFieldValue;
    setInnerText('withdraw-blance' , totalWithdraw);

    const getTotalBalance = getTextValueById('blance-total');
    const totalBalance = getTotalBalance -  withdrawInputFieldValue;
    setInnerText('blance-total' , totalBalance);

    if(totalBalance < 0 ){
        alert('not found this money');
        return;
    }
   
})