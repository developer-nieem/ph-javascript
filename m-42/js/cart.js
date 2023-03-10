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
}