
const phones = [
    {barnd:"wolton", price:3000, ram:"8gb"},
    {barnd:"samsang", price:40000, ram:"8gb"},
    {barnd:"oppo", price:10000, ram:"8gb"},
    {barnd:"realme", price:12000, ram:"8gb"},
    {barnd:"iiphone", price:2000, ram:"8gb"}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    
    for (let i = 0; i < phones.length; i++) {
        const element = phones[i];
        if (element.price < cheapest.price) {
            cheapest = element;
        }
        
    }
    console.log(cheapest);
}

cheapestPhone(phones)
