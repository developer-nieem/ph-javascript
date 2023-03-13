const productsList = () =>{
    const productName = document.getElementById('product-name').value;
    const productQty = document.getElementById('products-qty').value;
    document.getElementById('product-name').value = '';
    document.getElementById('products-qty').value = '';
    showProduct(productName, productQty);
    saveLocalStorageProducts(productName, productQty);
}

const showProduct= (name, qty) =>{
    const ul =  document.getElementById('container-ul');
    const li =  document.createElement('li');
    li.innerText =`${name} ${qty}`;
    ul.appendChild(li);
}

const getStartShopignCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart;

}

const saveLocalStorageProducts = (products , qty) =>{
        const cart =  getStartShopignCart();
        cart[products] =  qty;
        const cartStringify = JSON.stringify(cart);
        localStorage.setItem('cart', cartStringify)
}

const displayCartFromLocalStorage= () => {
    const displayCart =  getStartShopignCart();
   
    for (const product in displayCart) {
       const productsQty =  displayCart[product];
       console.log( product,productsQty );
       showProduct(product , productsQty)
    }
}

displayCartFromLocalStorage();