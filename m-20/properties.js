
var shopingCart = {
    book : 5,
    pen  : 50,
    mouse : 5,
    keyboard : 3,
}

// console.log(shopingCart);

// =================Get property value
// var property = shopingCart.mouse;
// console.log(property);

// ===================alternative way
// var property2 = shopingCart['pen'];
// console.log(property2);

var properyName = 'keyboard';

var propertyValue= shopingCart[properyName];

console.log(propertyValue);


//  ======================set property value 

shopingCart.mouse = 50;
console.log(shopingCart);

shopingCart["mouse"] = 60;
console.log(shopingCart);

var value = 120;
shopingCart['mouse'] = value;
console.log(shopingCart);


//  ============= find properties name

 var properties1 = Object.keys(shopingCart);
 console.log(properties1);


 //  ============= find properties values

 var propertiesValues = Object.values(shopingCart);
 console.log(propertiesValues);