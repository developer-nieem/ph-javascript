
function getValueFromInput(inputValueId){
    const inputValueById = document.getElementById(inputValueId);
    const inputValueString = inputValueById.value;
    const inputValue =  parseFloat(inputValueString);
   
    // make blank after submit the input field 
    inputValueById.value = '';

    return inputValue;

}

// get value from a element 
function getTextElementValueById(elementId){
    const element= document.getElementById(elementId);
    const elementValueString= element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

// set text  
function setValueTextElementById( id , setText){
    const textElement = document.getElementById(id);
    textElement.innerText = setText
}