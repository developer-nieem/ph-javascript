

let products = [
    {name:"shirt", price:300, qty: 6},
    {name:"pant", price:500, qty: 4},
    {name:"t-shirt", price:200, qty: 6},
    {name:"jaket", price:1000, qty: 2},
    {name:"panjabi", price:800, qty: 3},
];

function shopingCart(products){
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        const totalprice= element.price * element.qty
        total = total + totalprice;
        
    }
    console.log(total);
}

shopingCart(products)