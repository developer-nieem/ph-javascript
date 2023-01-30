

// loop and object diffarent 

var properties = ['book', 'pen', 'mouse', 'keyboard'];
var value = [5, 50, 5, 3];

var propertiesAndValue = {
    book : 5,
    pen  : 50,
    mouse : 5,
    keyboard : 3,
}


// loopinf and object

var shopingCart = {
    book : 5,
    pen  : 50,
    mouse : 5,
    keyboard : 3,
}

var property = Object.keys(shopingCart);

for(var i = 0; i < property.length; i++){
    const element = property[i];
    const value = shopingCart[element];
    // console.log(element, value);
}


// loop in

for(var properyName in shopingCart){
    const value = shopingCart[properyName];
    console.log(properyName, value);
}



