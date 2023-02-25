
fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => displaQouta(data))



const displaQouta =  qoutas =>{
    document.getElementById('qouta-id').innerText =  qoutas.slip.id;
    document.getElementById('qoutes').innerText = `" ${ qoutas.slip.advice} "`;

}