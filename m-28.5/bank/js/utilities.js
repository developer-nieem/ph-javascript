
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
