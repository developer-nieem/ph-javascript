const productsList = () =>{
    const productName = document.getElementById('product-name').value;
    const productQty = document.getElementById('products-qty').value;
    document.getElementById('product-name').value = '';
    document.getElementById('products-qty').value = '';
    showProduct(productName, productQty);

}

const showProduct= (name, qty) =>{
    const ul =  document.getElementById('container-ul');
    const li =  document.createElement('li');
    li.innerText =`${name} ${qty}`;
    ul.appendChild(li);
    saveCartOnLocalStorage(name, qty)
}

const getStoredCart =  () =>{
    const stordCart = localStorage.getItem('cart');
    let cart =  {};
    if(stordCart){
        cart = JSON.parse(stordCart)
    }
    return cart;
}

const saveCartOnLocalStorage = (products , qty) =>{
    const saveCart =  getStoredCart();
    saveCart[products] = qty;
    const cartStringify =  JSON.stringify(saveCart);
    localStorage.setItem('cart' , cartStringify)
}

const displayCartValueFromLocalStorage = () =>{
    const cart =  getStoredCart();
    
    for (const product in cart) {
        const cartItemQty = cart[product]
        console.log(product, cartItemQty);
        showProduct(product, cartItemQty)
    }
}

displayCartValueFromLocalStorage();

