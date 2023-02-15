
function generatePin(){
   const pin =  Math.round(Math.random()*10000) + '';
   if(pin.length === 4){
    return pin;
   }else{
    
     return generatePin()
   }
}

document.getElementById('generate-btn').addEventListener('click' , function(){
    
     document.getElementById('display-pin').value = generatePin();

})
document.getElementById('calculate-number').addEventListener('click' , function(event){
    
     const perValue = event.target.innerText;
    
    const previousVale =  document.getElementById('match-pin-input').value  ;
    if(isNaN(perValue)){
        if (perValue === "C") {
            document.getElementById('match-pin-input').value = '';
        }
    }else{
        const allNumebr =  previousVale + perValue
        document.getElementById('match-pin-input').value = allNumebr;
    }

    
})

