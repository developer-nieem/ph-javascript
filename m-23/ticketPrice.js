
function ticketPrice(qty){

  for (let i = 1; i <= qty; i++) {
  
       if (qty <= 100) {
            return qty * 100;
       }else if ( qty > 100 && qty <= 200) {
            return 10000 + (qty-100)*90;
       }else if(qty > 200){
            return 10000 + 9000+ (qty-200)*70;
       }
       
  }
}

let yourQty = 204;
console.log(ticketPrice(yourQty)); 