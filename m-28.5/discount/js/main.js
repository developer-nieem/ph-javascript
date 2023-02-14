
document.getElementById('basic-disc-btn').addEventListener('click' , function(){
    const getPrice = document.getElementById('price-basics').innerText;
    const getPriceValue = parseFloat(getPrice);

    const discount30 = getPriceValue -  (getPriceValue * 0.3);
    console.log(discount30);

    document.getElementById('cost').innerText = '$'+ discount30
})

document.getElementById('discount-advance-btn').addEventListener('click' , function(){
    const dicountInput = document.getElementById('dicount-input').value;
    document.getElementById('dicount-input').value = '';
    
    if(dicountInput === 'DISC30'){
        const dis30 = 1200 -  (1200 * 0.3);
        document.getElementById('cost-advance').innerText = '$'+ dis30
    }else{
        document.getElementById('cost-advance').innerText = '$1200';
    }

    
})